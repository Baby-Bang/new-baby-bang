import React from 'react';
import {browserHistory} from 'react-router';

export default class Login extends React.Component {
  submitUserInfo() {
    const userName = this.refs.userName.value;
    const password = this.refs.password.value;
    if (userName && password) {
      this.props.onSubmit({userName, password});
    } else {
      document.getElementById('error').innerHTML = '用户或密码不能为空！';
    }
  }

  render() {
    let error = '';
    if (this.props.httpCode === 403) {
      error = '用户或密码错误！';
    } else if (this.props.httpCode === 200) {
      browserHistory.push('/');
    }
    return <div>
      <input type="text" className="text form-control loginInput center" ref="userName" placeholder="用户名"/>
      <input type="text" className="text form-control loginInput center" ref="password" placeholder="密码"/>
      <div className="col-md-6 col-md-offset-1 errorColor" id="error">{error}</div>
      <button type="button" className="btn btn-default logbtn" onClick={this.submitUserInfo.bind(this)}>sumbit</button>
    </div>
  }
}
