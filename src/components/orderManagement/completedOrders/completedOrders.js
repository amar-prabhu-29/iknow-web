import React, { Component } from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import M from 'materialize-css'
class completedOrders extends Component {
    componentDidMount(){
        M.AutoInit();
    }
    render() {
        let completedOrders = []
        let displayOrders = ''
        if(this.props.orders){
            for(let order in this.props.orders){
                let curOrder = this.props.orders[order]
                curOrder.orderID = order
                if(this.props.orders[order].location_id === this.props.locationID){
                    completedOrders.push(curOrder)
                }
            }
            console.log(completedOrders)
            displayOrders = completedOrders.map(order => 
                <li key={order.orderID}>
                    <div className="collapsible-header">Order ID:{order.orderID} No Of Guests = {order.no_of_guest}</div>
                    <div className="collapsible-body"><span>
                        
                    </span></div>
                </li>
            )
        }
        return (
            <div>
                <ul className="collapsible">
                    {displayOrders}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    let orders = state.firestore.data.order
    return {
        orders
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
        {collection: 'order'}
    ])
)(completedOrders)