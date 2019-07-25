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
                        <td>Rs. {item.price}</td>
                        <td><span onClick={() => {this.props.deleteItem(table.hall+"/Tables/"+(table.tableNO-1)+"/Cart/items/"+index)}} style={{cursor: 'pointer'}}><i class="material-icons">delete</i></span></td>
                    </tr>
                )
            }
        return (
            <div style={{margin: '0px 20px 0px 20px'}}>
                <table className="centered responsive-table">
                    <thead style={{backgroundColor: '#ff5252'}}>
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