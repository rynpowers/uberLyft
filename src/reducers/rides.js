import { FETCH_RIDES } from '../actions/actionTypes';

const initialState = {
  uber: [],
  lyft: [],
};

const rides = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RIDES:
      return { ...state, uber: action.uber, lyft: action.lyft };
    default:
      return state;
  }
};

export default rides;
