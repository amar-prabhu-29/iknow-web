export const deleteItem = (reference) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
    let firebase = getFirebase();
    let ref = firebase.database().ref('Location/WoUc2HdIJePYcpztRB9j')
    console.log(ref)
    }
}