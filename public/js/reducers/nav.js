module.exports = (state = {userName: ''}, action) => {
  console.log(action.userName);
  switch (action.type) {
    case "GETUSERNAME":
      return {
      userName: action.userName
    };
    default:
      return state;
  }
};