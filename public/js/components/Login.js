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

  componentWillUpdate(nextProps) {
    if(nextProps.loginState === 200){
      browserHistory.push('/');
    }
  }

  render() {
    let error = '';
    if (this.props.loginState === 403) {
      error = '用户或密码错误！';
    }
    return <div className="col-lg-10 col-lg-offset-1">
      <input type="text" className="text form-control loginInput center" ref="userName" placeholder="用户名"/>
      <input type="password" className="text form-control loginInput center" ref="password" placeholder="密码"/>
      <div className="errorColor" id="error">{error}</div>
      <button type="button" className="btn btn-block logbtn" onClick={this.submitUserInfo.bind(this)}>登录</button>
    </div>
  }
}
