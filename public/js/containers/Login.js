import {connect} from 'react-redux';
import Login from '../components/Login';
import action from '../actions/login';

const mapStateToProps = (state) => {
  return {
    httpCode: state.login.httpCode
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (data) => {
      dispatch(action.login(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);