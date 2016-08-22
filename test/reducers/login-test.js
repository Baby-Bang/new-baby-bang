"use strict";
const reducer = require('../../public/js/reducers/login');
const actions=require('../../public/js/actions/login');
const expect = require('chai').expect;

describe('logIn reducer',()=>{
  it('state is right',()=>{
    const state={httpCode:''};
    const action=actions.login(200);
    expect(reducer(state,action).httpCode).to.be.deep.equal(200);
  });

  it('state is wrong',()=>{
    const state={httpCode:''};
    const action=actions.login(400);
    expect(reducer(state,action).httpCode).to.be.deep.equal(400);
  });
});