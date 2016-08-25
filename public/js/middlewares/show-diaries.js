import request from 'superagent';
import actions from '../actions/show-diaries';

export default store => next => action => {

  if (action.type === 'SET_DIARIES') {
    request.get('/diaries')
      .end((err, res) => {
        next(actions.showdiaries(res.body));
      });
  }
  else
    next(action);

};
