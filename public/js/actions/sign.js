"use strict";
const userExist = (state)=> {
  return {
    type: 'SET_ISUSER_EXIST',
    isUserExist: state
  };

};

const samePassword = (state)=> {
  return {
    type: 'SET_IS_SAME_PASSWORD',
    isSamePassword: state
  }
};

const disable = (state)=> {
  return {
    type: 'SET_IS_DISABLED',
    isDisabled: state
  }
};

const insertMessage = (message)=> {
  return {
    type: 'SEND_MESSAGE',
    text: message
  }
}
module.exports = {
  userExist,
  samePassword,
  disable,
  insertMessage
};