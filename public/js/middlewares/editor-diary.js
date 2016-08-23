import request from 'superagent';
import actions from '../actions/add-diary';

export default store => next => action => {
  if(action.type === 'GET_BABYBIR') {
    request.get('/babyBir')
      .end((err, res) => {
        next(actions.getBirthday(res.body));
      });
  } else {
    next(action);
  }
}