import React, { Component } from "react";
import M from "materialize-css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }
  getPrice = (items) => {

  }
  render() {
    const {items} = this.props
    let sum = 0
    for(let i in items){
        sum = sum+items[i].price
    }
    let allItems = items.map((item,index) => 
        <tr key={item.item_id}>
            <td>{item.name}</td>
            <td>Add ON</td>
            <td>{item.quantity}</td>
            <td>Rs. {item.price}</td>
        </tr>
        )
    return (
      <div key={"D"+this.props.orderID}>
        <a className="modal-trigger" data-target="modalOrder" style={{color:'#ff5252',cursor:'pointer',textDecoration:'underline'}}>
            Order Details
        </a>
        <div ref={Modal => {this.Modal = Modal;}} id="modalOrder" className="modal">
          <div className="modal-content">
            <h4>Order Details For Order</h4>
            <table className="centered responsive-table">
                <thead style={{backgroundColor: '#ff5252'}}>
                    <tr>
                        <th>Item Name</th>
                        <th>Add On</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {allItems}
                    <tr style={{backgroundColor: '#ff5252'}}>
                        <td><b>Subtotal</b></td>
                        <td></td>
                        <td></td>
                        <td><b>Rs. {sum}</b></td>
                    </tr>
                </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button className="modal-close waves-effect waves-red btn-flat">
              Close
            </button>
            
          </div>
        </div>
      </div>
    );
  }
}


export default Modal;