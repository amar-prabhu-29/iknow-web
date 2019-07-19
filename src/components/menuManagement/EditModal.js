import React, { Component } from "react";
import M from "materialize-css";
import {updateItem} from '../../store/actions/menuActions'
import {connect} from 'react-redux'

class EditModal extends Component {
  state = {
      name: this.props.itemDetails.name
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
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div key={this.props.itemDetails.itemID}>
        <a className="btn modal-trigger" data-target={this.props.itemDetails.itemID}>
          Edit Item
        </a>
        <div ref={Modal => {this.Modal = Modal;}} id={this.props.itemDetails.itemID} className="modal">
          <div className="modal-content">
            <h4>Edit Item</h4>
            <form onSubmit={this.handleSubmit}>
                <div className="input-field col l12">
                    <label htmlFor="name" className="active">Item Name</label>
                    <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>
                </div>
                <input type="file" id="imageURL" onChange={this.handleChange}/>
                <button className="modal-close waves-effect waves-green btn-flat" type="submit">
                    Edit Changes
                </button>
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