module.exports = (state = {httpCode: '', babyBir: ''}, action)=> {
  switch (action.type) {
    case 'AFTER_ADD_DIARY':
      return {
        httpCode: action.httpCode,
        babyBir: state.babyBir
      };
    case 'GET_BABYBIR':
      return {
        httpCode: state.httpCode,
        babyBir: action.babyBir
      };
    default:
      return state;
  }
};