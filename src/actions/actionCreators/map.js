import {
  GET_MAP_REGION,
  SET_MAP_REGION_START,
  MAP_READY,
  UPDATE_SEARCH_TEXT,
  UPDATE_LOCATIONS,
} from '../actionTypes';
import { Location, Permissions } from 'expo';

export const getMapRegion = region => ({ type: GET_MAP_REGION, region });

export const updateSearchText = text => ({ type: UPDATE_SEARCH_TEXT, text });

export const setMapRegionStart = (longitude, latitude) => ({
  type: SET_MAP_REGION_START,
  longitude,
  latitude,
});

export const updateSearchTextThunk = (text, fn) => (dispatch, getState) => {
  dispatch(updateSearchText(text));
  const updatedText = getState().map.searchText;
  fn(updatedText);
};

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

export const updateLocationsThunk = locations => (dispatch, getState) =>
  dispatch({
    type: UPDATE_LOCATIONS,
    locations,
  });
