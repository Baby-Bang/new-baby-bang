import {combineReducers} from 'redux';
import login from './login';
import diaries from './show-diaries';
import reducer from './reducer';

export default combineReducers({
  login,
  reducer,
  diaries
});