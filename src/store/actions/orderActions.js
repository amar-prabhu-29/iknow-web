export const deleteItem = (reference) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
    let firebase = getFirebase();
    const location = getState().login.locationID
    const finalRef = "Location/"+location+"/"+reference
    console.log(finalRef)
    firebase.database().ref(finalRef).remove().then(() => {
        console.log("Deleted")
    }).catch(err => {
        console.log(err)
    })
    }
}