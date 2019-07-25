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
      if(this.state.veg === "on"){
        this.setState({
          'veg': true
        })
      }
      else{
        this.setState({
          'veg': false
        })
      }
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
    var array_of_dom_elements = document.querySelectorAll("input[type=range]");
    M.Range.init(array_of_dom_elements);
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div>
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
                    <input className="file-path validate" type="text" />
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
                <div className="input-field col l6">
                  <p className="range-field">Select Priority Order
                    <input type="range" id="priority_order" min="-50" max="50"  onChange={this.handleChange}/>
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

const mapStateToProps = (state) => {
  return{
    addLastItem: state.menu.addLastItem
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);