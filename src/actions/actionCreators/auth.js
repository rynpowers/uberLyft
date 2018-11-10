import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import { FB_LOGIN_SUCCESS, FB_LOGIN_FAIL } from '../actionTypes';

export const loginUser = token => ({ type: FB_LOGIN_SUCCESS, token });
const loginUserFail = () => ({ type: FB_LOGIN_FAIL });

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(
    '554779231637041',
    { permissions: ['public_profile'] }
  );

  if (type === 'cancel') {
    return dispatch(loginUserFail());
  } else {
    await AsyncStorage.setItem('fb_token', token);
    dispatch(loginUser(token));
  }
};

export const fbLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  !token ? doFacebookLogin(dispatch) : dispatch(loginUser(token));
};
