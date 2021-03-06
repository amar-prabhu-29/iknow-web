export const login = (credentials) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((response) => {
            let uID = response.user.uid
            firestore.collection('user').doc(response.user.uid).get().then((snapshot) => {
                let locationID = snapshot.data().location_id
                let businessID = snapshot.data().business_id
                let logoURL = ''
                firestore.collection('business').doc(businessID).get().then((snapshot) => {
                    logoURL = snapshot.data().logoURL
                })
                firestore.collection('location').doc(snapshot.data().location_id).get().then((snapshot) => {
                    let menuID = snapshot.data().menu_id
                    dispatch({type: 'LOGIN_SUCCESS',uID,locationID,menuID,logoURL})
                })
            })
        }).catch((err) => {
            dispatch({type:'LOGIN_ERROR',err})
        })
    }
}

export const refreshState = (uid) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('user').doc(uid).get().then((snapshot) => {
            let locationID = snapshot.data().location_id
            let businessID = snapshot.data().business_id
            let logoURL = ''
            firestore.collection('business').doc(businessID).get().then((snapshot) => {
                logoURL = snapshot.data().logoURL
            })
            firestore.collection('location').doc(snapshot.data().location_id).get().then((snapshot) => {
                let menuID = snapshot.data().menu_id
                dispatch({type: 'LOGIN_SUCCESS',uid,locationID,menuID,logoURL})
            })
        })
    }
}