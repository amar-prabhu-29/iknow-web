import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import Sidebar from '../sidebar/Sidebar'
import Item from './Item'
import Categories from './Categories'
import {Redirect} from 'react-router-dom'
import Modal from './Modal'
class Menu extends Component{
    state = {
        currentCat : '',
        catId: ''
    }
    render(){
        const changeCurrentCat = (catName,catId) => {
            this.setState(
                {
                    currentCat: catName,
                    catId: catId
                }
            )
        }
        if(!this.props.loginState.auth.uid) return <Redirect to="/login" />
        const {menuList,categories} = this.props
        console.log(this.state)
        return(
            
            <div className="main">
                <Sidebar />
                <Categories content={categories} changeCurrentCat={changeCurrentCat}/>
                <Item items={menuList} parentCat={this.state.currentCat}></Item>
                <div className="fixed-action-btn">
                    <Modal buttonName="Add Item" catId={this.state.catId}/>
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
                let cat = {...state.firestore.data.menu_category[category]}
                cat.id = category;
                categories.push(cat)
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
                            category: state.firestore.data.menu_category[items[item].category_id].name,
                            imageURL: items[item].imageURL
                        }
                        menuList.push(menuItem)
                    }
                }
            }
        }
    }  
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