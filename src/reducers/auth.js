import { FB_LOGIN_SUCCESS, FB_LOGIN_FAIL } from '../actions/actionTypes';

const initialState = {
  token: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case FB_LOGIN_SUCCESS:
      return { ...state, token: action.token };
    case FB_LOGIN_FAIL:
      return { ...state, token: '' };
    default:
      return state;
  }
};

export default auth;
