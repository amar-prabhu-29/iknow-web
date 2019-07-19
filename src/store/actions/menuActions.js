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

export const deleteItem = (item) => {
    return (dispatch,getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('item').doc(item).delete().then(() => {
            dispatch({
                type:'DELETE_ITEM',
                item
            })
        }
        )
    }
}

export const updateItem = (item,id) => {
    return (dispatch,getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('item').doc(id).update(item).then(() => {
            dispatch({
                type:'UPDATE_ITEM',
                item
            })
        }).catch((err) => {
                console.log(err)
            })
    }
}