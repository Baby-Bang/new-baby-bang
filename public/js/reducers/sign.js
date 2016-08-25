module.exports = (state = {isUserExist: false, isSamePassword: true, isDisabled: ''}, action) => {
    switch (action.type) {
        case "SET_ISUSER_EXIST":
            return {
                isUserExist: action.isUserExist,
                isSamePassword: state.isSamePassword,
                isDisabled: state.isDisabled
            };
        case "SET_IS_SAME_PASSWORD":
            return {
                isUserExist: state.isUserExist,
                isSamePassword: action.isSamePassword,
                isDisabled: state.isDisabled
            };
        case "SET_IS_DISABLED":
            return {
                isUserExist: state.isUserExist,
                isSamePassword: state.isSamePassword,
                isDisabled: action.isDisabled
            };
        default:
            return state;
    }
};