import React, {Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component {
  more() {
    alert('敬请期待');
  }
  componentDidMount(){
    this.props.onGetUserName();
  }
  render() {
    return <div>
      <nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header col-md-2" id="logo">
            <a className="navbar-brand" href="#">育 儿 帮</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">首页</a></li>
              <li>
                <div className="dropdown">
                  <button className="dropbtn">成长日记</button>
                  <div className="dropdown-content">
                    <a href="#">查看日记</a>
                    <a href="#">添加日记</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <button className="dropbtn">我的小圈子</button>
                  <div className="dropdown-content">
                    <a href="#">爸爸圈</a>
                    <a href="#">妈妈圈</a>
                  </div>
                </div>
              </li>
              <div className="navbtn">
                <button className="dropbtn" onClick={this.more}>
                  <a href="#">更多</a>
                </button>
              </div>
              <div id="log">
                  <NavLogReg userName={this.props.userName}/>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  }
}

class NavLogReg extends Component{
  render(){
    return <div>
      <div className={this.props.userName===''? '':'hidden'}>
        <Link to="/login">登录</Link> |
        <Link to="#"> 注册</Link>
      </div>
      <div className={this.props.userName===''?'hidden':''}>
        <Link to="#">{this.props.userName}</Link> |
        <Link to="#">登出</Link>
      </div>
    </div>
  }
}

export default Nav;