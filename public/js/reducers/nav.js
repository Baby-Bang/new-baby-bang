module.exports = (state = {userName: ''}, action) => {
  switch (action.type) {
    case "GETUSERNAME":
      return {
      userName: action.userName
    };
    default:
      return state;
  }
};