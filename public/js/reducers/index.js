import {combineReducers} from 'redux';
import login from './login';
import reducer from './reducer';
import sign from './sign'

export default combineReducers({
  login,
  reducer,
  sign
});