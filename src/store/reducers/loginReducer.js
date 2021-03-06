const initState = {
    loginError: null,
    locationID: null,
    logoURL: null,
    menuID: null,
}
const loginReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                loginError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                uID: action.uID,
                locationID : action.locationID,
                menuID: action.menuID,
                logoURL: action.logoURL,
                loginError: null
            }
        default:
            return(
                state
            )
    }
}

export default loginReducer