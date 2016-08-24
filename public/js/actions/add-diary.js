const afterAddDiary = (httpCode)=> {
  return {
    type: 'AFTER_ADD_DIARY',
    httpCode
  }
};

const addDiary=(data)=>{
  return{
    type:'ADD_DIARY',
    data
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
  afterAddDiary,
  getBirthday
};