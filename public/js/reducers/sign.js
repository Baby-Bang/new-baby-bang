module.exports = (state = {isUserExist: false, isSamePassword: true, isDisabled: ''}, action) => {
    switch (action.type) {
        case "SET_ISUSER_EXIST":
            return {
                isUserExist: action.isUserExist,
                isSamePassword: true,
                isDisabled: ''
            };
        case "SET_IS_SAME_PASSWORD":
            return {
                isUserExist: false,
                isSamePassword: action.isSamePassword,
                isDisabled: ''
            };
        case "SET_IS_DISABLED":
            return {
                isUserExist: false,
                isSamePassword: true,
                isDisabled: action.isDisabled
            };
        default:
            return state;
    }
};