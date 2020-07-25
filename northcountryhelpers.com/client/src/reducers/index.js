import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import feedback from './feedback';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  feedback,
});
