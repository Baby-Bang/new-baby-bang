module.exports = (state = {loginState: ''}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        loginState: action.loginState
      };
    case 'CLEAR':
      return {
        loginState: ''
      };
    default:
      return state;
  }
};