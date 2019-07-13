import loginReducer from './loginReducer'
import menuReducer from './menuReducer'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login: loginReducer,
    menu: menuReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer