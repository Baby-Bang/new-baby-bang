import {connect} from 'react-redux';
import React, {Component} from "react";
import {Link} from 'react-router';

class LoginRegister extends React.Component {
  render() {
    return <div>
      <div className="loginTop">
        <img src="../../images/logintop.png" alt="top" className="center loginTop"/>
      </div>
      <div className="row loginBody">
        <div className="col-lg-4 col-md-4 col-lg-offset-2">
          <img src="../../images/babybang.png" alt="left" className="visible-lg-block"/>
          <img src="../../images/om-user.png" alt="left" className="visible-lg-block"/>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="loginSubmit">
            <div id="Loglist" className="center">
              <Link to="/login"><span className="logA" id="login">登录</span></Link>
              <Link to="/sign"><span className="logA" id="sign">注册</span></Link>
            </div>
            <div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default connect()(LoginRegister);