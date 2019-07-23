import React, { Component } from "react";
import M from "materialize-css";
import { addItem } from '../../store/actions/menuActions'
import {connect} from 'react-redux'

class Modal extends Component {
  state = {
    name: '',
    imageURL: null,
    category_id: ''
  }
  handleChange = (e) => {
    if(e.target.id === 'imageURL'){
      this.setState({
        [e.target.id] : e.target.files[0],
        category_id: this.props.catId
      })
    }
    else{
      this.setState({
        [e.target.id] : e.target.value,
        category_id: this.props.catId
      })
    }
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addItem(this.state)
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
      <div key={this.props.key}>
        <a className="btn modal-trigger" data-target="modaladdItem">
          <i className="large material-icons">add</i>
        </a>
        <div ref={Modal => {this.Modal = Modal;}} id="modaladdItem" className="modal">
          <div className="modal-content">
            <h4>{this.props.buttonName}</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="file-field input-field">
                  <div className="btn">
                    <span>Select Food Image</span>
                    <input type="file" id="imageURL" onChange={this.handleChange}/>
                  </div>
                  <div className="file-path-wrapper">
                    <input clasName="file-path validate" type="text" />
                  </div>
                </div>
                <div className="input-field col l12">
                    <label htmlFor="name">Item Name</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                </div>
                <div className="input-field col l12">
                    <label htmlFor="price">Item Price</label>
                    <input type="number" id="price" onChange={this.handleChange}/>
                </div>
                <div className="input-field col s4 m4 l4">
                  <select id="type" className="browser-default" onChange={this.handleChange}>
                    <option value="" disabled selected>Choose Type</option>
                    <option value="FOOD">Food</option>
                    <option value="DRINK">Drink</option>
                  </select>
                </div>
                <button className="btn col s4 m4 l4" type="submit">
                    Add Item
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
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null,mapDispatchToProps)(Modal);