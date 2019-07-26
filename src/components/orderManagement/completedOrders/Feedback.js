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

  render() {
    let {feedback} = this.props
    return (
      <div key={this.props.orderID}>
        <a className="modal-trigger" data-target="modalFeedback" style={{color:'#ff5252',cursor:'pointer',textDecoration:'underline'}}>
          {this.props.orderID}
        </a>
        <div ref={Modal => {this.Modal = Modal;}} id="modalFeedback" className="modal">
          <div className="modal-content">
            <h4>Feedback For Order</h4>
            <p><b>Order ID:</b> {this.props.orderID}</p>
            <p><b>Anniversary:</b>{feedback.annivarsary}</p>
            <p><b>Birthday:</b>{feedback.birthday}</p>
            <p><b>Extra:</b>{feedback.extra}</p>
            <hr />
            <div className="row">
                <div className="col l4">
                    <p><b>Name:</b>{feedback.name}</p>
                </div>
                <div className="col l4">
                    <p><b>Email:</b>{feedback.email}</p>
                </div>
                <div className="col l4">
                    <p><b>Phone:</b>{feedback.phonenumber}</p>
                </div>
            </div>
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