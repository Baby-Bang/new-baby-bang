import React from 'react';

export default class login extends React.Component {
  submitUserInfo() {
    const userName = this.refs.userName.value;
    const password = this.refs.password.value;
    this.props.onSubmit({userName, password});
    if(this.props.httpCode === 400) {
      console.log(this.props.httpCode,2);
    } else {
      console.log(this.props.httpCode, 1);
    }
  }

  render() {
    return <div>
      <input type="text" ref="userName"/>
      <input type="text" ref="password"/>
      <button onClick={this.submitUserInfo.bind(this)}>sumbit</button>
    </div>
  }
}
