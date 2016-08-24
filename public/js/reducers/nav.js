module.exports = (state = {userName: '', isActive: 'home'}, action) => {
  switch (action.type) {
    case "GETUSERNAME":
      return {
        userName: action.userName,
        isActive: state.isActive
      };
    case 'CHANGE_ACTIVE':
      return {
        userName: state.userName,
        isActive: action.text
      }
    default:
      return state;
  }
};