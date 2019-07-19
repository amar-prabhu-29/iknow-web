export const addItem = (item) =>{
return (dispatch,getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    let uploadImage = getFirebase().uploadFile('/',item.imageURL).then(
        ret => ret.uploadTaskSnapshot.ref.getDownloadURL()).then(
            url => {return url}
        );
    uploadImage.then(url => {
        console.log(url)
        item.imageURL = url
        firestore.collection('item').add({
        ...item,
        }).then(() => {
            dispatch({
                type:'ADD_ITEM',
                item
            })
        }).catch((err) => {
            dispatch({type: 'ADD_ITEM_ERROR', err})
        })
    })
}
}