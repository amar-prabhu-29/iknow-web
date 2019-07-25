export const deleteItem = (reference) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
    let firebase = getFirebase();
    const location = getState().login.locationID
    const finalRef = "Location/"+location+"/"+reference
    firebase.database().ref(finalRef).remove().then(() => {
        
    }).catch(err => {
        console.log(err)
    })
    }
}