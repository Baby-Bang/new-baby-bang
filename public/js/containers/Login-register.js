import {connect} from 'react-redux';
import React, {Component} from "react";

class LoginRegister extends React.Component {
  render() {
    return <div>
      <div className="loginTop">
        <img src="../../images/logintop.png" alt="top" className="center loginTop"/>
      </div>
      <div className="row loginBody">
        <div className="col-lg-5 col-lg-offset-2">
          <img src="../../images/babybang.png" alt="left" className="visible-lg-block"/>
          <img src="../../images/om-user.png" alt="left" className="visible-lg-block"/>
        </div>
        <div className="col-lg-6 col-lg-pull-1 center loginSubmit">
          <div id="Loglist" className="center">
            <span className="logA" id="log">登录</span>
            <span className="logA" id="sign">注册</span>
          </div>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    </div>
  }
}

export default connect()(LoginRegister);