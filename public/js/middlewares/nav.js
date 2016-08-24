import request from 'superagent';
import actions from '../actions/nav';

export default store => next => action => {
  if (action.type === 'GETUSERNAME') {
    request.get('/sessions/user')
      .end((err, res) => {
        next(actions.getUserName(res.body));
      });
  }
  else
    next(action);
};
