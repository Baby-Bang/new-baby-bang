import {combineReducers} from 'redux';
import login from './login';
import reducer from './reducer';
import editorDiary from './editor-diary';

export default combineReducers({
  login,
  reducer,
  editorDiary
});