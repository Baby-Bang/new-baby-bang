import React, {Component} from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

class Nav extends Component {
  more() {
    alert('敬请期待');
  }

  componentDidMount() {
    this.props.onGetUserName();
  }

  changeTab(text, url) {
    if (this.props.userName === '') {
      alert('您未登录, 是否登录');
      browserHistory.push('/login');
    }
    else {
      this.props.onChangeTab(text);
      browserHistory.push(url);
    }
  }

  logOut(text) {
    this.props.onLogOut();
    this.props.onChangeTab(text);
    this.props.changeLoginState();
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
                <li className={this.props.currentTab === 'home' ? "active navLi" : "navLi"}>
                  <Link to="/"><span onClick={this.changeTab.bind(this, 'home')}>首页</span></Link>
                </li>
                <li>
                  <div className="dropdown">
                    <button className={this.props.currentTab === 'growth' ? "dropbtn navLi active" : "dropbtn navLi"}>
                      成长日记
                    </button>
                    <div className="dropdown-content">
                      <a>
                        <span onClick={this.changeTab.bind(this, 'growth', '/diary')}>
                          添加日记
                        </span>
                      </a>
                      <a>
                        <span onClick={this.changeTab.bind(this, 'growth', '/showdiaries')}>
                          查看历史
                        </span>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown">
                    <button className={this.props.currentTab === 'circle' ? "dropbtn navLi active" : "dropbtn navLi"}>
                      小圈子
                    </button>
                    <div className="dropdown-content">
                      <a><span onClick={this.changeTab.bind(this, 'circle', '/daddyCenter')}>爸爸圈</span></a>
                      <a><span onClick={this.changeTab.bind(this, 'circle', '/momCenter')}>妈妈圈</span></a>
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
                  <div id="login_res">
                    <div className={this.props.userName === '' ? '' : 'hidden'}>
                      <Link to="/login">登录</Link> |
                      <Link to="/sign"> 注册</Link>
                    </div>
                    <div className={this.props.userName === '' ? 'hidden' : ''}>
                      <Link to="/personCenter">{this.props.userName}</Link> |
                      <Link to="/" onClick={this.logOut.bind(this, 'home')}>登出</Link>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>;
  }
}

export default Nav;
