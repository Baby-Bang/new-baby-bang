import {connect} from 'react-redux';
import Sign from '../components/Sign';
import action from '../actions/sign';

function mapStateToProps(state) {
  return {
    isUserExist: state.sign.isUserExist,
    isSamePassword: state.sign.isSamePassword,
    isDisabled: state.sign.isDisabled
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userExist: (exist)=> {
      dispatch(action.userExist(exist))
    },
    samePassword: (pwd)=> {
      dispatch(action.samePassword(pwd))
    },
    disabled: (abled)=> {
      dispatch(action.disable(abled))
    },
    insertMessage: (message)=> {
      dispatch(action.insertMessage(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sign);