"use strict";
const getUserName = (userName)=> {
  return {
    type: 'GETUSERNAME',
    userName
  };
};

module.exports = {
  getUserName
};