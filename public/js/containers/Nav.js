import {connect} from 'react-redux';
import Nav from '../components/Nav';
import action from '../actions/nav';

const mapStateToProps = (state) => {
  return {
    userName:state.nav.userName,
    currentTab: state.nav.currentTab
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserName: () => {
      dispatch(action.getUserName(''));
    },
    onchangeTab: (text) => {
      dispatch(action.changeTab(text));
    },
    onLogOut:()=>{
      dispatch(action.logOut());
    },
    changeLoginState: () => {
      dispatch(action.clear());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);