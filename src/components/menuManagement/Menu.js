import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {login} from '../../store/actions/loginActions'
import {menuActions} from '../../store/actions/menuActions'

class Menu extends Component{
    state = {
        location: null,
        menuID: null
    }
    render(){
        return(
            <div className="menu container">
                
                Hello Menu
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let categories = []
    if(state.login.menuID){
        let menu_categories = state.firestore.data.menu[state.login.menuID].category_ids
        if(menu_categories){
            menu_categories.forEach(category => {
                categories.push(state.firestore.data.menu_category[category])
            })
            let items = state.firestore.data.item
            if(items){
                console.log(items)
                items.forEach(item => {
                    if(item.category_id in menu_categories){
                        console.log(item)
                    }
                })
            }
        }
    }
    console.log(categories)
    
    return {
        loginState: state.firebase,
        loginInfo: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default compose(connect(
    mapStateToProps,
    mapDispatchToProps,
),
    firestoreConnect([
        {collection: 'menu'},
        {collection: 'menu_category'},
        {collection: 'item'}
    ])
)(Menu)