import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteItem} from '../../store/actions/orderActions'
class OrderDetails extends Component {
    render() {
        let table = null
        let {tables,current} = this.props
        if(tables!=null && current!=null){
            for(let curTable in tables){
                if(tables[curTable].OrderID === current){
                    table = tables[curTable]
                }
            }
        }
        if(table != null){
            let allItems=<tr><td></td><td></td><td>NO ITEMS ORDERED</td><td></td><td></td><td></td></tr>
            if(table.Cart.items){
                allItems = table.Cart.items.map((item,index) => 
                    <tr key={item.item_id}>
                        <td>{item.name}</td>
                        <td>Add ON</td>
                        <td>{item.status}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td><button className="btn red" onClick={() => {this.props.deleteItem(table.hall+"/Tables/"+(table.tableNO-1)+"/Cart/items/"+index)}}>R</button></td>
                    </tr>
                )
            }
        return (
            <div>
                <table className="centered responsive-table">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Add On</th>
                            <th>Status</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allItems}
                    </tbody>
                </table>
            </div>
        )
    }
    else{
        return (
            <div>

            </div>
        )
    }
}
}

const mapDispatchToProps = (dispatch) => {
    return{
    deleteItem: (ref) => dispatch(deleteItem(ref))
    }
}

export default connect(null,mapDispatchToProps)(OrderDetails)