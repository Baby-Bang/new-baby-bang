module.exports = (state = {httpCode: '', babyBir: '', babyScore: -1, parentScore: -1}, action)=> {
  switch (action.type) {
    case 'AFTER_ADD_DIARY':
      return {
        httpCode: action.httpCode,
        babyBir: state.babyBir,
        babyScore: state.babyScore,
        parentScore: state.parentScore
      };
    case 'GET_BABYBIR':
      return {
        httpCode: state.httpCode,
        babyBir: action.babyBir,
        babyScore: -1,
        parentScore: -1
      };
    case 'CHANGE_BABYSCORE':
      return {
        httpCode: state.httpCode,
        babyBir: state.babyBir,
        babyScore: action.score,
        parentScore: state.parentScore
      };
    case 'CHANGE_PARENTSCORE':
      return {
        httpCode: state.httpCode,
        babyBir: state.babyBir,
        babyScore: state.babyScore,
        parentScore: action.score
      };
    default:
      return state;
  }
};