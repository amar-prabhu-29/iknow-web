import React, { Component } from "react";
import M from "materialize-css";
import { addItem } from '../../store/actions/menuActions'
import {connect} from 'react-redux'

class Modal extends Component {
  state = {
    name: '',
    category_id: ''
  }
  handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value,
        category_id: this.props.catId
    })        
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
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div>
        <a className="waves-effect waves-light btn modal-trigger" data-target="modal1">
          {this.props.buttonName}
        </a>

        <div ref={Modal => {this.Modal = Modal;}} id="modal1" className="modal">
          <div className="modal-content">
            <h4>{this.props.buttonName}</h4>
            <form onSubmit={this.handleSubmit}>
                <div className="input-field col l12">
                    <input type="text" id="name" onChange={this.handleChange}/>
                </div>
                <button className="modal-close waves-effect waves-green btn-flat" type="submit">
                    Add
                </button>
            </form>
          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">
              Close
            </a>
            
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