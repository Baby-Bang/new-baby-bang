module.exports = (state = {userName: '', currentTab: 'home'}, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return Object.assign({}, state, {userName: action.userName});
    case 'CHANGE_TAB':
      return Object.assign({}, state, {currentTab: action.text});
    default:
      return state;
  }
};