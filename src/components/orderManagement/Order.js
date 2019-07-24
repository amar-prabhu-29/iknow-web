import React, { Component } from 'react'
import {connect} from 'react-redux'
import {refreshState} from '../../store/actions/loginActions'
import {Redirect} from 'react-router-dom'
import DinerHalls from './DinerHalls'
import Sidebar from '../sidebar/Sidebar'

class Order extends Component {
    render() {
        let display = ''
        if(!this.props.loginState.auth.uid) return <Redirect to="/login" />
        else if (this.props.loginState.auth.uid && this.props.loginInfo.locationID === null){
            this.props.refreshState(this.props.loginState.auth.uid)
        }
        if(this.props.loginInfo.locationID != null){
            display = <DinerHalls locationID={this.props.loginInfo.locationID} />
        }
        return (
            <div>
                <Sidebar />
                <div className="main">
                    {display}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginState: state.firebase,
        loginInfo: state.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        refreshState: (uid) => dispatch(refreshState(uid))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Order)