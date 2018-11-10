import { combineReducers } from 'redux';
import rides from './rides';
import auth from './auth';
import loading from './loading';

export default combineReducers({
  rides,
  auth,
  loading,
});
