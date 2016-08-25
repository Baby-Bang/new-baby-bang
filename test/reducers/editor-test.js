const reducer = require('../../public/js/reducers/editor-diary');
const actions = require('../../public/js/actions/add-diary');
const expect = require('chai').expect;

describe('Editor diary', () => {
  let state;
  beforeEach(() => {
    state = {saveSuccess: '', babyBir: '', babyScore: -1, parentScore: -1};
  });
  it('return saved is successful', () => {
    expect(reducer(state, actions.afterAddDiary(201)).saveSuccess).to.equal(201);
    expect(reducer(state, actions.afterAddDiary(400)).saveSuccess).to.equal(400);
  });

  it('return baby birthday', () => {
    expect(reducer(state, actions.getBirthday('2016-01-02')).babyBir).to.equal('2016-01-02');
  });

  it('return correct score for baby or parent', () => {
    expect(reducer(state, actions.changeScore('CHANGE_BABYSCORE', 4)).babyScore).to.equal(4);
    expect(reducer(state, actions.changeScore('CHANGE_PARENTSCORE', 3)).parentScore).to.equal(3);
  });
});