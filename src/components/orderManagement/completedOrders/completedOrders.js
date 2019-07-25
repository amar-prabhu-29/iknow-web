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
                curOrder['orderID'] = order
                if(this.props.orders[order].location_id === this.props.locationID){
                    completedOrders.push(curOrder)
                }
            }
            displayOrders = completedOrders.map(order => 
                <tr key={order.orderID}>
                    <td>{order.orderID}</td>
                    <td>{order.no_of_guest}</td>
                    <td>Amount</td>
                    <td>Order Details</td>
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