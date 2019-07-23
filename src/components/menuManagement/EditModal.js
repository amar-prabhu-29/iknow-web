import React, { Component } from "react";
import M from "materialize-css";
import {updateItem} from '../../store/actions/menuActions'
import {connect} from 'react-redux'

class EditModal extends Component {
  state = {
      name: this.props.itemDetails.name,
      price: this.props.itemDetails.price,
      priority_order: this.props.itemDetails.priority_order
  }
  handleChange = (e) => {
    if(e.target.id === 'imageURL'){
      this.setState({
        [e.target.id] : e.target.files[0],
      })
    }
    else{
    console.log(e.target.value)
      this.setState({
        [e.target.id] : e.target.value,
      })
    }
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.updateItem(this.state,this.props.itemDetails.itemID)
  }
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    var array_of_dom_elements = document.querySelectorAll("input[type=range]");
    M.Range.init(array_of_dom_elements);
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div key={this.props.itemDetails.itemID}>
        <a className="btn modal-trigger" data-target={this.props.itemDetails.itemID}>
          <i className="material-icons">edit</i>
        </a>
        <div ref={Modal => {this.Modal = Modal;}} id={this.props.itemDetails.itemID} className="modal">
          <div className="modal-content">
            <h4>Edit Item</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                  <div className="file-field input-field">
                    <div className="btn">
                      <span>Select Food Image</span>
                      <input type="file" id="imageURL" onChange={this.handleChange}/>
                    </div>
                    <div className="file-path-wrapper">
                      <input className="file-path validate" type="text" />
                    </div>
                  </div>
                  <div className="input-field col l12">
                      <label htmlFor="name" className="active">Item Name</label>
                      <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>
                  </div>
                  <div className="input-field col l12">
                    <label htmlFor="price" className="active">Item Price</label>
                    <input type="number" id="price" value={this.state.price} onChange={this.handleChange}/>
                </div>
                <div className="input-field col l6">
                  <p className="range-field">Select Priority Order
                    <input type="range" id="priority_order" min="-50" max="50" value={this.state.priority_order}  onChange={this.handleChange}/>
                  </p>
                </div>
                <div className="input-field col l6">
                <div className="switch">
                    <label>
                      Non Veg
                      <input id="veg" type="checkbox" onChange={this.handleChange}/>
                      <span className="lever"></span>
                      Veg
                    </label>
                  </div>
                </div>
                <button className="btn" type="submit">
                    Edit Changes
                </button>
              </div>
            </form>
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



const mapDispatchToProps = (dispatch) => {
    return {
        updateItem: (item,id) => dispatch(updateItem(item,id))
    }
}

export default connect(null,mapDispatchToProps)(EditModal);