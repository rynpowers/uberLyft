import {
  GET_MAP_REGION,
  SET_MAP_REGION_START,
  UPDATE_SEARCH_TEXT,
  UPDATE_LOCATIONS,
} from '../actions';

const initialState = {
  region: {},
  start: {
    latitude: 0,
    longitude: 0,
  },
  searchText: '',
  locations: [],
};

const map = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAP_REGION:
      return { ...state, region: action.region };
    case SET_MAP_REGION_START:
      return {
        ...state,
        start: { longitude: action.longitude, latitude: action.latitude },
      };
    case UPDATE_SEARCH_TEXT:
      return { ...state, searchText: action.text };
    case UPDATE_LOCATIONS:
      return { ...state, locations: action.locations };
    default:
      return state;
  }
};

export default map;
