const addDiary = (httpCode)=> {
  return {
    type: 'ADD_DIARY',
    httpCode
  }
};

module.exports = {
  addDiary
};