import React, { Component } from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import M from 'materialize-css'
import Feedback from './Feedback'
import OrderDetails from './Details'
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
                curOrder['orderID'] = order
                if(this.props.orders[order].location_id === this.props.locationID){
                    completedOrders.push(curOrder)
                }
            }
            const getSum = (items) => {
                let sum = 0
                for(let i in items){
                    sum = sum+items[i].price
                }
                return sum
            }
            displayOrders = completedOrders.map(order => 
                <tr key={order.orderID}>
                    <td><Feedback orderID={order.orderID} feedback={order.feedback}/></td>
                    <td>{order.no_of_guest}</td>
                    <td>Rs. {getSum(order.items)}</td>
                    <td><OrderDetails orderID={order.orderID} items={order.items} /></td>
                </tr>
            )
        }
        return (
            <div style={{margin: '0px 20px 0px 20px'}}>
                <table className="centered responsive-table">
                    <thead style={{backgroundColor: '#ff5252'}}>
                        <tr>
                            <th>Order ID</th>
                            <th>No. Of Guests</th>
                            <th>Amount</th>
                            <th>Order Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayOrders}
                    </tbody>
                </table>
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