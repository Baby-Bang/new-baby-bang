import request from 'superagent';
import actions from '../actions/sign';

export default store => next => action => {

  if(action.type === 'SET_ISUSER_EXIST'){

    request.post('/isUserExist')
      .send({userName:action.isUserExist})
      .end((err,res) => {
        next(actions.userExist(res.body));
      })
  }else{
    next(action)
  }
}