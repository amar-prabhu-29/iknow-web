const initState = {
    loginError: null
}
const loginReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                loginError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log("Login Success");
            return {
                ...state,
                loginError: null
            }
        default:
            return(
                state
            )
    }
}

export default loginReducer