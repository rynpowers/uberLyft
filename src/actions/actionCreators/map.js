import {
  GET_MAP_REGION,
  SET_MAP_REGION_START,
  MAP_READY,
  UPDATE_SEARCH_TEXT,
  SET_MAP_REGION_END,
  OPEN_SEARCH,
  CLOSE_SEARCH,
  RESET_END,
} from '../actionTypes';
import { Location, Permissions } from 'expo';

export const getMapRegion = region => ({ type: GET_MAP_REGION, region });

export const openSearch = () => ({ type: OPEN_SEARCH });
export const closeSearch = () => ({ type: CLOSE_SEARCH });
export const resetEnd = () => ({ type: RESET_END });

export const updateSearchText = text => ({ type: UPDATE_SEARCH_TEXT, text });

export const setMapRegionStart = (longitude, latitude) => ({
  type: SET_MAP_REGION_START,
  longitude,
  latitude,
});

export const setMapRegionStartThunk = () => async dispatch => {
  try {
    await Permissions.askAsync(Permissions.LOCATION);
    const {
      coords: { longitude, latitude },
    } = await Location.getCurrentPositionAsync();
    dispatch(
      getMapRegion({
        latitude,
        longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      })
    );
    dispatch(setMapRegionStart(longitude, latitude));
    dispatch({ type: MAP_READY, mapReady: true });
  } catch (err) {
    console.log(err);
  }
};

export const selectPlaceThunk = ({ id, fn }) => async (dispatch, getState) => {
  const place = await fn(id);
  const { lat, lng } = place.geometry.location;
  dispatch({
    type: SET_MAP_REGION_END,
    place: { latitude: lat, longitude: lng },
  });

  dispatch({
    type: GET_MAP_REGION,
    region: { ...getState().map.region, latitude: lat, longitude: lng },
  });
};
