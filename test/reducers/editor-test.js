const reducer = require('../../public/js/reducers/editor-diary');
const actions = require('../../public/js/actions/add-diary');
const expect = require('chai').expect;

describe('Editor diary', () => {
  let state;
  beforeEach(() => {
    state = {httpCode: '', babyBir: ''};
  });
  it('changes httpCode', () => {
    expect(reducer(state, actions.afterAddDiary(201)).httpCode).to.equal(201);
    expect(reducer(state, actions.afterAddDiary(400)).httpCode).to.equal(400);
  });

  it('get baby birthday', () => {
    expect(reducer(state, actions.getBirthday('2016-01-02')).babyBir).to.equal('2016-01-02');
  });
});