module.exports = (state = {userName: '', currentTab: 'home'}, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        userName: action.userName,
        currentTab: state.currentTab
      };
    case 'CHANGE_TAB':
      return {
        userName: state.userName,
        currentTab: action.text
      };
    default:
      return state;
  }
};