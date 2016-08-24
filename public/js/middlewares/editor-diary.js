import request from 'superagent';
import {browserHistory} from 'react-router';
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

  if(action.type==='ADD_DIARY'){
    request.post('/diary')
      .send(action.data)
      .end((err,res)=>{
         if(res.statusCode===201){
           browserHistory.push('/');
         }else{
           next(actions.afterAddDiary(res.statusCode));
         }

    })
  }else{
    next(action);
  }
}