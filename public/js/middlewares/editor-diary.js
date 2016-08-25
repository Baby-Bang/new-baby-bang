import request from 'superagent';
import actions from '../actions/add-diary';

export default store => next => action => {
  if (action.type === 'GET_BABYBIR') {
    request.get('/babyBir')
      .end((err, res) => {
        next(actions.getBirthday(res.body));
      });
  } else {
    next(action);
  }

  if (action.type === 'ADD_DIARY') {
    request.post('/diary')
      .send(action.data)
      .end((err, res)=> {
        if (res.statusCode === 201) {
          alert('保存成功');
        } else {
          next(actions.afterAddDiary(res.statusCode));
        }
      });
  } else {
    next(action);
  }
};