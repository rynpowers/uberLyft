import { FETCH_RIDES, MAP_READY, RESET_END } from '../actionTypes';
import callRides from '../../../api/callRides';

export const fetchRides = (uber, lyft) => {
  return {
    type: FETCH_RIDES,
    uber,
    lyft,
  };
};

export const fetchRidesThunk = () => {
  return async (dispatch, getState) => {
    const { start, end } = getState().map;
    const destStart = [start.latitude, start.longitude];
    const destEnd = [end.latitude, end.longitude];
    const [lyft, uber] = await callRides(destStart, destEnd);
    dispatch(fetchRides(uber, lyft));
    dispatch({ type: MAP_READY, mapReady: false });
    dispatch({ type: RESET_END });
  };
};
