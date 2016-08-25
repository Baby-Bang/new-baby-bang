module.exports = (state = {diaries: []}, action) => {
  switch (action.type) {
    case "SET_DIARIES":
      return {
        diaries: action.diaries
      };
    default:
      return state;
  }
};