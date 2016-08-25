import {combineReducers} from 'redux';
import login from './login';
import reducer from './reducer';
import nav from './nav';
import sign from './sign';
import editorDiary from './editor-diary';

export default combineReducers({
  login,
  reducer,
  nav,
  sign,
  editorDiary
});