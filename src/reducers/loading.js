import { APP_READY } from '../actions/actionTypes';

const initialState = {
  appReady: false,
  mapReady: false,
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case APP_READY:
      return { ...state, appReady: true };
    default:
      return state;
  }
};

export default loading;
