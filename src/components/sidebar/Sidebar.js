import React, {Component} from 'react'

class Sidebar extends Component {
    render(){
        return(
            <div>
                <nav class="top-nav blue-grey darken-1">
                    <div class="container">
                        <div className="nav-wrapper">
                            <a className="brand-logo center"></a>
                            <a href="#" data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only"><i class="material-icons">menu</i></a>
                        </div>
                    </div>
                </nav>
                <div className="sidenav sidenav-fixed" id="nav-mobile">
                    <div className="logo center"><a id="logo-container" href="" className="brand-logo" /></div>
                    <ul>
                        <li className="bold active"><a href="home.php" className="waves-effect waves-teal">Overview</a></li>
                        <li className="bold"><a href="home.php" className="waves-effect waves-teal">Order Management</a></li>
                        <li className="bold"><a href="home.php" className="waves-effect waves-teal">Menu Management</a></li>
                        <li className="bold"><a href="home.php" className="waves-effect waves-teal">Feedback</a></li>
                        <li className="bold"><a href="home.php" className="waves-effect waves-teal">Settings</a></li>
                        <li className="bold"><a href="home.php" className="waves-effect waves-teal">Ticket</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar