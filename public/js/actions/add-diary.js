const afterAddDiary = (saveSuccess)=> {
  return {
    type: 'AFTER_ADD_DIARY',
    saveSuccess
  };
};

const addDiary = (data)=> {
  return {
    type: 'ADD_DIARY',
    data
  };
};

const getBirthday = (babyBir) => {
  return {
    type: 'GET_BABYBIR',
    babyBir
  };
};

const changeScore = (type, score) => {
  return {
    type,
    score
  };
};

module.exports = {
  addDiary,
  afterAddDiary,
  getBirthday,
  changeScore
};