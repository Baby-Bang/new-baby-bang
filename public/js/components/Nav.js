import React, {Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component {
  more() {
    alert('敬请期待');
  }

  componentDidMount() {
    this.props.onGetUserName();
  }

  changeActive(text) {
    this.props.onChangeActive(text);
  }

  render() {
    return <div>
      <div className="navTop">
        <nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header col-md-2" id="logo">
              <a className="navbar-brand" href="#">育 儿 帮</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navList">
                <li className={this.props.isActive === 'home' ? "active navLi" : "navLi"}>
                  <Link to="/"><span onClick={this.changeActive.bind(this, 'home')}>首页</span></Link>
                </li>
                <li>
                  <div className="dropdown">
                    <button className={this.props.isActive === 'growth' ? "dropbtn navLi active" : "dropbtn navLi"}>成长日记</button>
                    <div className="dropdown-content">
                      <Link to="/diaries"><span onClick={this.changeActive.bind(this, 'growth')}>查看日记</span></Link>
                      <Link to="/diary"><span onClick={this.changeActive.bind(this, 'growth')}>添加日记</span></Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown">
                    <button className={this.props.isActive === 'circle' ? "dropbtn navLi active" : "dropbtn navLi"}>小圈子</button>
                    <div className="dropdown-content">
                      <Link to="/dadyCenter"><span onClick={this.changeActive.bind(this, 'circle')}>爸爸圈</span></Link>
                      <Link to="/momCenter"><span onClick={this.changeActive.bind(this, 'circle')}>妈妈圈</span></Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="navbtn navA">
                    <button className="dropbtn" onClick={this.more}>
                      <a className="" href="#">更多</a>
                    </button>
                  </div>
                </li>

                <div id="log">
                  <NavLogReg userName={this.props.userName}/>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="scoll">test</div>
    </div>
  }
}

class NavLogReg extends Component {
  render() {
    return <div id="login_res">
      <div className={this.props.userName === '' ? '' : 'hidden'}>
        <Link to="/login">登录</Link> |
        <Link to="/sign"> 注册</Link>
      </div>
      <div className={this.props.userName === '' ? 'hidden' : ''}>
        <Link to="#">{this.props.userName}</Link> |
        <Link to="#">登出</Link>
      </div>
    </div>
  }
}

export default Nav;
