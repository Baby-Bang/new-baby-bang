"use strict";
const getUserName = (userName)=> {
  return {
    type: 'GETUSERNAME',
    userName
  };
};

const changeActive = (text) => {
  return {
    type: 'CHANGE_ACTIVE',
    text
  };
};

const logOut = ()=> {
  return {
    type: 'LOG_OUT',
  }
};

const clear = () => {
  return {
    type: 'CLEAR'
  };
};

module.exports = {
  getUserName,
  changeActive,
  logOut,
  clear
};