import { GET_MAP_REGION } from '../actions';

const initialState = {
  region: {},
};

const map = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAP_REGION:
      return { ...state, region: action.region };
    default:
      return state;
  }
};

export default map;
