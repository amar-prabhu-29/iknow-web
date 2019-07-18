export const addItem = (item) =>{
return (dispatch,getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
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
    
}
}