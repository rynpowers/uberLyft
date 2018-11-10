import { APP_READY } from '../actionTypes';
import { AsyncStorage } from 'react-native';
import { loginUser } from './auth';

export const initializeApp = () => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('fb_token');
    dispatch(loginUser(token));
    dispatch({ type: APP_READY });
  } catch (err) {
    dispatch({ type: APP_READY });
  }
};
