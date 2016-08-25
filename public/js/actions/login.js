"use strict";
const login = (loginState)=> {
  return {
    type: 'LOGIN',
    loginState
  };

};

const sendData = (data)=> {
  return {
    type: 'SEND_DATA',
    data
  };
};

module.exports = {
  login,
  sendData
};