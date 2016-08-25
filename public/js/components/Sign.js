import React from 'react';

export default class Sign extends React.Component {

  SignUser() {
    const userName = this.refs.userName.value;
    const password = this.refs.password.value;
    const confirmpwd = this.refs.confirmPwd.value;
    const babyBir = this.refs.babyBir.value;
    const sex = $("input[name=sex]:checked").val();
    if (userName === '' || password === '' || confirmpwd === '' || babyBir === '' || sex === undefined) {
      alert('信息填写不完整');
    } else {
      this.props.insertMessage({userName, password, babyBir, sex})
      alert('注册成功!');

    }
  }

  samePassword() {
    const password = this.refs.password.value;
    const confirmpwd = this.refs.confirmPwd.value;
    if (password != confirmpwd && confirmpwd != '') {+
      this.props.samePassword(false);
      this.props.disabled('disabled');
      document.getElementById('samePassword').innerHTML = '两次密码不一致';
    } else {
      if (this.props.isUserExist === false) {
        this.props.disabled('');
      }
      document.getElementById('samePassword').innerHTML = '';
    }
  }

  isUserExist() {
    this.props.userExist(this.refs.userName.value);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isUserExist === true) {
      nextProps.disabled('disabled');
    } else {
      if (nextProps.isSamePassword === true) {
        nextProps.disabled('');
      }
    }
  }

  render() {
    console.log(this.props.isDisabled);
    let error = '';
    if (this.props.isUserExist === true) {
      error = '用户名已存在';
    }

    return <div className="col-lg-10 col-lg-offset-1">
      <br/><input type="text" className="text form-control center" ref="userName" placeholder="用户名"
                  onChange={this.isUserExist.bind(this)}/><br/>
      <div className="col-md-offset-0" id="userExist">{error}</div>
      <input type="password" className="text form-control center" ref="password" placeholder="密码" onBlur={this.samePassword.bind(this)}/><br/>
      <input type="password" className="text form-control center" ref="confirmPwd" placeholder="确认密码"
             onBlur={this.samePassword.bind(this)}/><br/>
      <div className="col-md-offset-0" id="samePassword"></div>
      <input type="Date" className="text form-control center" ref="babyBir" placeholder="宝宝生日"/><br/>
      <div className="form-group">
        <div className="col-md-4 col-md-offset-3">
          <input type="radio" name="sex" value="male"/>爸爸
        </div>
        <div className="col-md-4">
          <input type="radio" name="sex" value="female"/>妈妈
        </div>
      </div>
      <button type="button" className="btn btn-block signbtn " onClick={this.SignUser.bind(this)}
              disabled={this.props.isDisabled}>注册
      </button>
    </div>
  }
}