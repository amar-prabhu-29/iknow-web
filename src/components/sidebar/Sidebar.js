import React, {Component} from 'react'

class Sidebar extends Component {
    render(){
        return(
            <div>
                <nav className="top-nav blue-grey darken-1">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a className="brand-logo center">Authenticated Users</a>
                            <a href="#" data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only"><i className="material-icons">menu</i></a>
                        </div>
                    </div>
                </nav>
                <div className="side-nav fixed" id="nav-mobile">
                    <div className="logo center" style="max-height:200px"><a id="logo-container" href="" className="brand-logo" /></div>
                    <ul style="margin-top:0px">
                        <li className="bold wave-effects wave-teal center"><h5>Welcome</h5></li>
                        <li className="bold active"><a href="home.php" className="waves-effect waves-teal">View Authenticated Users</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar