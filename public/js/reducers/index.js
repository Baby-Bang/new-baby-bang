import {combineReducers} from 'redux';
import login from './login';
import reducer from './reducer';
import sign from './sign'
import editorDiary from './editor-diary';


export default combineReducers({
  login,
  reducer,
  sign,
  editorDiary
});