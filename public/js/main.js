import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from "./containers/App";
import Hello from './containers/Hello';
import reducer from "./reducers/index";
import getValue from "./middlewares/get-value";
import login from "./middlewares/login";
import Login from './containers/Login';
import LoginRegister from  './containers/Login-register';

const createStoreWithMiddleware = applyMiddleware(getValue, login)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Hello}/>
      </Route>
      <Route path="/login" component={LoginRegister}>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));
