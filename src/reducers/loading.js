import { APP_READY, MAP_READY } from '../actions';

const initialState = {
  appReady: false,
  mapReady: false,
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case APP_READY:
      return { ...state, appReady: true };
    case MAP_READY:
      return { ...state, mapReady: action.mapReady };
    default:
      return state;
  }
};

export default loading;
