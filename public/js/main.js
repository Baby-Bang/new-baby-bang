import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from "./containers/App";
import Home from "./containers/Home";
import reducer from "./reducers/index";
import getValue from "./middlewares/get-value";
import login from "./middlewares/login";
import nav from "./middlewares/nav";
import Login from './containers/Login';
import LoginRegister from  './containers/Login-register';
import EditorDiary from './containers/Editor-diary';
import editorDiary from './middlewares/editor-diary';
import Sign from './containers/Sign';
import userExist from './middlewares/sign';
import message from './middlewares/sign-insertMessage';

const createStoreWithMiddleware = applyMiddleware(getValue, login, editorDiary, userExist, message, nav)(createStore);


const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
      </Route>
      <Route path="/login" component={LoginRegister}>
        <IndexRoute component={Login}/>
        <Route path="/sign" component={Sign}/>
      </Route>
      <Route path="/diary" component={EditorDiary}/>
    </Router>
  </Provider>, document.getElementById('app'));
