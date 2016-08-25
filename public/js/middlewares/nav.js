import request from 'superagent';
import actions from '../actions/nav';

export default store => next => action => {
  if (action.type === 'SET_USERNAME') {
    request.get('/sessions/user')
      .end((err, res) => {
        next(actions.getUserName(res.body));
      });
  }
  else if(action.type === 'LOG_OUT'){
    request.del('/sessions')
      .end((err,res)=>{
        next(actions.getUserName(res.body));
      })
  }
  else
    next(action);
};
