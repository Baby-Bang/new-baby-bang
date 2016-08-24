import {combineReducers} from 'redux';
import login from './login';
import reducer from './reducer';
import nav from './nav';

export default combineReducers({
  login,
  reducer,
  nav
});