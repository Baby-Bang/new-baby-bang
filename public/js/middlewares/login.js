import request from 'superagent';
import actions from '../actions/login';

export default store => next => action => {
  if (action.type === 'SEND_DATA') {
    request.post('/sessions')
      .send(action.data)
      .end((err, res) => {
        next(actions.login(res.statusCode));
      });
  }
  else
    next(action);
};
