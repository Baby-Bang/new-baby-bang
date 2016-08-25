import {combineReducers} from 'redux';
import login from './login';
import diaries from './show-diaries';
import reducer from './reducer';
import showDiaries from './show-diaries';

export default combineReducers({
  login,
  reducer,
  diaries,
  showDiaries
});