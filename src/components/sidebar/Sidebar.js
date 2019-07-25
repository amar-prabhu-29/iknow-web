import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Sidebar extends Component {
    render(){
        return(
            <div>
                <nav className="top-nav grey lighten-2">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="#" data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only"><i className="material-icons">menu</i></a>
                        </div>
                    </div>
                </nav>
                <div className="sidenav sidenav-fixed #000000" id="nav-mobile" style={{backgroundColor:'#000000'}}>
                    <div className="logo center" style={{minHeight: '20%',backgroundColor: '#004d40'}}><a id="logo-container" href="" className="brand-logo" /></div>
                    <ul style={{minHeight: '60%'}}>
                        <li className="bold"><Link to="/" className="waves-effect waves-teal" style={{color: 'white'}}><i className="material-icons" style={{color: 'white',marginRight: 10}}>computer</i>Overview</Link></li>
                        <li className="bold"><Link to="/orders" className="waves-effect waves-teal" style={{color: 'white'}}><i className="material-icons" style={{color: 'white',marginRight: 10}}>cast_connected</i>Order Management</Link></li>
                        <li className="bold"><Link to="/menu" className="waves-effect waves-teal" style={{color: 'white'}}><i className="material-icons" style={{color: 'white',marginRight: 10}}>card_membership</i>Menu Management</Link></li>
                        <li className="bold"><a className="waves-effect waves-teal" style={{color: 'white'}}><i className="material-icons" style={{color: 'white',marginRight: 10}}>feedback</i>Feedback</a></li>
                        <li className="bold"><a className="waves-effect waves-teal" style={{color: 'white'}}><i className="material-icons" style={{color: 'white',marginRight: 10}}>settings</i>Settings</a></li>
                        <li className="bold"><a className="waves-effect waves-teal" style={{color: 'white'}}><i className="material-icons" style={{color: 'white',marginRight: 10}}>format_list_bulleted</i>Ticket</a></li>
                        <li className="bold" style={{bottom:0}}><a className="waves-effect waves-teal" style={{color: 'white'}}><i className="material-icons" style={{color: 'white',marginRight: 10}}>close</i>Logout</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar