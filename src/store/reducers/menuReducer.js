const initState = {
    location: null,
    menuId: null,
    addLastItem: false
}

const menuReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return{
                ...state,
                addLastItem: true
            }
        case 'ADD_ITEM_ERROR':
            return{
                ...state,
                addLastItem: action.err
            }
        default:
            return state
    }
}

export default menuReducer