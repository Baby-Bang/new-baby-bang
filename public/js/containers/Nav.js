import {connect} from 'react-redux';
import Nav from '../components/Nav';
import action from '../actions/nav';

const mapStateToProps = (state) => {
  return {
    userName:state.nav.userName,
    isActive: state.nav.isActive
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserName: () => {
      dispatch(action.getUserName(''));
    },
    onChangeActive: (text) => {
      "use strict";
      dispatch(action.changeActive(text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);