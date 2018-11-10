import { FETCH_RIDES } from '../actionTypes';
import callRides from '../../../api/callRides';

export const fetchRides = (uber, lyft) => {
  return {
    type: FETCH_RIDES,
    uber,
    lyft,
  };
};

export const fetchRidesThunk = () => {
  return async dispatch => {
    const [lyft, uber] = await callRides();
    [uber[1], uber[2]] = [uber[2], uber[1]];
    let newUber = uber.filter((ride, i) => i !== 3);
    dispatch(fetchRides(newUber, lyft));
  };
};
