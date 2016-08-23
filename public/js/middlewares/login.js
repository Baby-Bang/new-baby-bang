import request from 'superagent';
import actions from '../actions/login';
import {browserHistory} from 'react-router';

export default store => next => action => {
  if (action.type === 'LOGIN') {
    request.post('/sessions')
      .send(action.httpCode)
      .end((err, res) => {
        if (res.statusCode === 200) {
          browserHistory.push('/');
        } else {
          next(actions.login(res.statusCode));
        }
      });
  }
  else
    next(action);
};
