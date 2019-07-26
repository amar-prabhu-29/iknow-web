import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import M from 'materialize-css'
class Sidebar extends Component {
    componentDidMount(){
        M.AutoInit();
    }
    render(){
        return(
            <div>
                <nav className="top-nav grey lighten-2">
                    <div className="container">
                        <div className="nav-wrapper">
                            <span data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only"><i className="material-icons">menu</i></span>
                        </div>
                    </div>
                </nav>
                <ul className="sidenav sidenav-fixed" id="nav-mobile" style={{backgroundColor:'#000000'}}>
                    <li className="logo center" style={{minHeight: '20%',backgroundColor: '#004d40'}}>
                        <span id="logo-container" className="brand-logo">
                            <object id="front-page-logo" type="image/png" className="responsive-img" data={this.props.logo} height="130vh" style={{borderRadius: '5%',margin:'5px'}}></object>
                        </span>
                    </li>
                    <li className="bold"><NavLink to="/overview" className="waves-effect waves-teal" activeStyle={{backgroundColor:'teal'}} style={{color: 'white'}}><i className="material-icons" style={{color: 'white',marginRight: 10}}>computer</i>Overview</NavLink></li>
                    <li className="bold"><NavLink to="/orders" className="waves-effect waves-teal" activeStyle={{backgroundColor:'teal'}} style={{color: 'white'}}><i className="material-icons" style={{color: 'white',marginRight: 10}}>cast_connected</i>Order Management</NavLink></li>
                    <li className="bold"><NavLink to="/menu" className="waves-effect waves-teal" activeStyle={{backgroundColor:'teal'}} style={{color: 'white'}}><i className="material-icons" style={{color: 'white',marginRight: 10}}>card_membership</i>Menu Management</NavLink></li>
                    <li className="bold"><a className="waves-effect waves-teal" style={{color: 'white'}}><i className="material-icons" style={{color: 'white',marginRight: 10}}>feedback</i>Feedback</a></li>
                    <li className="bold"><a className="waves-effect waves-teal" style={{color: 'white'}}><i className="material-icons" style={{color: 'white',marginRight: 10}}>settings</i>Settings</a></li>
                    <li className="bold"><a className="waves-effect waves-teal" style={{color: 'white'}}><i className="material-icons" style={{color: 'white',marginRight: 10}}>format_list_bulleted</i>Ticket</a></li>
                    <li className="bold" style={{bottom:0}}><a className="waves-effect waves-teal" style={{color: 'white'}}><i className="material-icons" style={{color: 'white',marginRight: 10}}>close</i>Logout</a></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        logo: state.login.logoURL
    }
}

export default connect(mapStateToProps)(Sidebar)