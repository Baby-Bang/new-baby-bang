"use strict";
const login = (httpCode)=> {
  return {
    type: 'LOGIN',
    httpCode
  };

};

module.exports = {
  login
};