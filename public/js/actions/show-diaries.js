"use strict";
const showdiaries = (diaries)=> {

  return {
    type: 'SET_DIARIES',
    diaries:diaries
  };
};

module.exports = {showdiaries};