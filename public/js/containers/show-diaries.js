import {connect} from 'react-redux';
import ShowDiaries from  '../components/show-diaries';
import action from '../actions/show-diaries';

const getDates = (diaries) => {
  diaries.reverse();
  const date = diaries.map(diary => {
    return diary.date.split('-');
  });
  const year = date.map(date => date[0]);

  const mySetYear = new Set();
  year.map(y => mySetYear.add(y));

  let dealYear = [];
  for (let i of mySetYear) {
    dealYear.push(i);
  }

  return dealYear.map(y => {
    let dealMonth = [];
    for (let d of date) {
      if (d[0] === y) {
        dealMonth.push(d[1]);
      }
    }

    const mySetMonth = new Set();
    dealMonth.map(c => mySetMonth.add(c));
    dealMonth = [];

    for (let i of mySetMonth) {
      dealMonth.push(i);
    }

    const monthDay = dealMonth.map(m => {
      let dealDay = [];
      for (let i of date) {
        if (i[1] === m && i[0] === y) {
          dealDay.push(i[2]);
        }
      }

      const mySetDay = new Set();
      dealDay.map(i => mySetDay.add(i));
      dealDay = [];

      for (let i of mySetDay) {
        dealDay.push(i);
      }
      return {month: m, day: dealDay};
    });

    return {year: y, monthDay: monthDay};
  });
};


const mapStateToProps = (state) => {
  return {
    diaries: state.showDiaries.diaries,
    dates: getDates(state.showDiaries.diaries)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShow: () => {
      dispatch(action.showdiaries(''));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowDiaries);