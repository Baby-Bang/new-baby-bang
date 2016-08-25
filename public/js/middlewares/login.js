import request from 'superagent';
import actions from '../actions/login';

export default store => next => action => {

  if (action.type === 'LOGIN') {
    request.post('/sessions')
      .send(action.httpCode)
      .end((err, res) => {
        next(actions.login(res.statusCode));
      });
  }
  else
    next(action);
};
