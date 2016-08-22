module.exports = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        httpCode: action.httpCode
      };
    default:
      return state;
  }
};