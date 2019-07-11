import loginReducer from './loginReducer'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login: loginReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer