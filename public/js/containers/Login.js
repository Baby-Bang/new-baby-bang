import {connect} from 'react-redux';
import Login from '../components/Login';
import action from '../actions/login';

const mapStateToProps = (state) => {
  return {
    loginState: state.login.loginState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (data) => {
      dispatch(action.sendData(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);