import React from 'react';

export default class login extends React.Component {
  submitUserInfo() {
    const userName = this.refs.userName.value;
    const password = this.refs.password.value;
    if(userName && password) {
      this.props.onSubmit({userName, password});
      if (this.props.httpCode === 400) {
        document.getElementById('error').innerHTML = '用户或密码错误！';
      } else {
        console.log(this.props.httpCode, 1);
      }
    } else {
      document.getElementById('error').innerHTML = '用户或密码不能为空！';
    }
  }

  render() {
    return <div>
      <input type="text" className="text form-control loginInput center" ref="userName" placeholder="用户名"/>
      <input type="text" className="text form-control loginInput center" ref="password" placeholder="密码"/>
      <div className="col-md-6 col-md-offset-1 errorColor" id="error"></div>
      <button type="button" className="btn btn-default logbtn" onClick={this.submitUserInfo.bind(this)}>sumbit</button>
    </div>
  }
}
