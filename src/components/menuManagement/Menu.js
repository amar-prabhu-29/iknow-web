import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import Categories from './Categories';
import Sidebar from '../sidebar/Sidebar'

class Menu extends Component{
    state = {
        location: null,
        menuID: null
    }
    render(){
        const {menuList,categories} = this.props
        const item = menuList.map((mL) => <li>{mL.name}</li>)
        return(
            <div>
                <Sidebar />
                <div className="menu container">
                    <Categories category={categories} items={menuList} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let categories = []
    let menuList = []
    if(state.login.menuID){
        let menu_categories = state.firestore.data.menu[state.login.menuID].category_ids
        if(menu_categories){
            menu_categories.forEach(category => {
                categories.push(state.firestore.data.menu_category[category])
            })
            let items = state.firestore.data.item
            if(items){
                for(var item in items){
                    if(menu_categories.includes(items[item].category_id)){
                        let menuItem = {
                            isactive: items[item].isactive,
                            kitchen: items[item].kitchen,
                            name: items[item].name,
                            price: items[item].price,
                            priority_order: items[item].priority_order,
                            type: items[item].type,
                            veg: items[item].veg,
                            category: state.firestore.data.menu_category[items[item].category_id].name
                        }
                        menuList.push(menuItem)
                    }
                }
            }
        }
    }
    console.log(menuList)    
    return {
        loginState: state.firebase,
        loginInfo: state.login,
        categories: categories,
        menuList
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