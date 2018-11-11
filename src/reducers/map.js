import {
  GET_MAP_REGION,
  SET_MAP_REGION_START,
  SET_MAP_REGION_END,
  OPEN_SEARCH,
  CLOSE_SEARCH,
  RESET_END,
} from '../actions';

const initialState = {
  region: {},
  start: {
    latitude: 0,
    longitude: 0,
  },
  end: {
    latitude: 0,
    longitude: 0,
  },
  modalOpen: false,
};

const map = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAP_REGION:
      return { ...state, region: action.region };
    case SET_MAP_REGION_START:
      return {
        ...state,
        start: {
          longitude: action.longitude,
          latitude: action.latitude,
        },
        modalOpen: false,
      };
    case SET_MAP_REGION_END:
      return {
        ...state,
        end: action.place,
        modalOpen: false,
      };
    case OPEN_SEARCH:
      return { ...state, modalOpen: true };
    case CLOSE_SEARCH:
      return { ...state, modalOpen: false };
    case RESET_END:
      return { ...state, end: {} };
    default:
      return state;
  }
};

export default map;
