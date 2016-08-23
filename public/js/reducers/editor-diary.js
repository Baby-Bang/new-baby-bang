module.exports = (state = {httpCode: ''}, action)=> {
  switch (action.type) {
    case 'ADD_DIARY':
      return {
        httpCode: action.httpCode
      };
    default:
      return state;
  }
};