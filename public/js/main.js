import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from "./containers/App";
import reducer from "./reducers/reducer";
import getValue from "./middlewares/get-value";
import Home from "./containers/Home"

const createStoreWithMiddleware = applyMiddleware(getValue)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));
