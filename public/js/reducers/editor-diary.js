module.exports = (state = {saveSuccess: '', babyBir: '', babyScore: -1, parentScore: -1}, action)=> {
  switch (action.type) {
    case 'AFTER_ADD_DIARY':
      return {
        saveSuccess: action.saveSuccess,
        babyBir: state.babyBir,
        babyScore: state.babyScore,
        parentScore: state.parentScore
      };
    case 'GET_BABYBIR':
      return {
        saveSuccess: state.saveSuccess,
        babyBir: action.babyBir,
        babyScore: -1,
        parentScore: -1
      };
    case 'CHANGE_BABYSCORE':
      return {
        saveSuccess: state.saveSuccess,
        babyBir: state.babyBir,
        babyScore: action.score,
        parentScore: state.parentScore
      };
    case 'CHANGE_PARENTSCORE':
      return {
        saveSuccess: state.saveSuccess,
        babyBir: state.babyBir,
        babyScore: state.babyScore,
        parentScore: action.score
      };
    default:
      return state;
  }
};