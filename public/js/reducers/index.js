import {combineReducers} from 'redux';
import login from './login';
import diaries from './show-diaries';
import reducer from './reducer';
import showDiaries from './show-diaries';
import nav from './nav';
import sign from './sign';
import editorDiary from './editor-diary';

export default combineReducers({
  login,
  reducer,
  diaries,
  showDiaries,
  nav,
  sign,
  editorDiary
});