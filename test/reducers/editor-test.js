const reducer = require('../../public/js/reducers/editor-diary');
const actions = require('../../public/js/actions/add-diary');
const expect = require('chai').expect;

describe('Editor diary', () => {
  it('changes httpCode', () => {
    const state = {httpCode: ''};
    expect(reducer(state, actions.addDiary(201)).httpCode).to.equal(201);
    expect(reducer(state, actions.addDiary(400)).httpCode).to.equal(400);
  })
});