"use strict";
const getUserName = (userName)=> {
  return {
    type: 'SET_USERNAME',
    userName
  };
};

const changeTab = (text) => {
  return {
    type: 'CHANGE_TAB',
    text
  };
};

const logOut = ()=> {
  return {
    type: 'LOG_OUT',
  };
};

const clear = () => {
  return {
    type: 'CLEAR'
  };
};

module.exports = {
  getUserName,
  changeTab,
  logOut,
  clear
};