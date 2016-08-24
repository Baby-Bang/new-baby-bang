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

module.exports = {
  getUserName,
  changeActive
};