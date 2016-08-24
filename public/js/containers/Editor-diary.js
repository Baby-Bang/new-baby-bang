import {connect} from 'react-redux';
import EditorDiary from '../components/Editor-diary';
import actions from '../actions/add-diary';

const getAge = (babyBir) => {
  const babyBirs = babyBir.split('-').map(b => parseInt(b));
  const oldDate = new Date(babyBirs[0], babyBirs[1], babyBirs[2]);
  const myDate = new Date();
  const dates = myDate.toLocaleDateString().split('/').map(d => parseInt(d)).reverse();
  const newDate = new Date(dates[0], dates[2], dates[1]);
  const diff = new Date(
    newDate.getFullYear() - oldDate.getFullYear(),
    newDate.getMonth() - oldDate.getMonth(),
    newDate.getDate() - oldDate.getDate()
  );
  let age = `${diff.getDate()}天`;
  if (diff.getMonth() != 0) {
    age = `${diff.getMonth()}月${age}`
  }
  if (diff.getYear() != 0) {
    age = `${diff.getYear()}年${age}`
  }

  return {
    age,
    today: `${dates[0]}-${dates[2]}-${dates[1]}`
  };
};
const mapStateToProps = (state) => {
  const babyBir = state.editorDiary.babyBir;
  return getAge(babyBir);
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGet: () => {
      dispatch(actions.getBirthday(''));
    },
    onAdd:(data)=>{
      dispatch(actions.addDiary(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorDiary);