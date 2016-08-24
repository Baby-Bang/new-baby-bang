import {connect} from 'react-redux';
import Nav from '../components/Nav';
import action from '../actions/nav';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userName:state.nav.userName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserName: () => {
      dispatch(action.getUserName(''));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);