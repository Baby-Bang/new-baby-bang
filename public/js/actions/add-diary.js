const addDiary = (httpCode)=> {
  return {
    type: 'ADD_DIARY',
    httpCode
  }
};

const getBirthday = (babyBir) => {
  return {
    type: 'GET_BABYBIR',
    babyBir
  }
};

module.exports = {
  addDiary,
  getBirthday
};