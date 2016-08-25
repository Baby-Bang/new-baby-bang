import request from 'superagent';
import actions from '../actions/sign';

export default store => next => action => {

  if (action.type === 'SEND_MESSAGE') {
    request.post('/session')
      .send({
        userName: action.text.userName,
        password: action.text.password,
        babyBir: action.text.babyBir,
        sex: action.text.sex,
        diaries: []
      })
      .end((err, res) => {
        next(actions.userExist(res.body));
      });
  } else {
    next(action);
  }
};
