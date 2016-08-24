module.exports = (state = {loginState: ''}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        loginState: action.loginState
      };
    default:
      return state;
  }
};