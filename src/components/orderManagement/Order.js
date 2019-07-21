import React, { Component } from 'react'
import {connect} from 'react-redux'
import {refreshState} from '../../store/actions/loginActions'
import {Redirect} from 'react-router-dom'
import DinerHalls from './DinerHalls'

class Order extends Component {
    render() {
        if(!this.props.loginState.auth.uid) return <Redirect to="/login" />
        else if (this.props.loginState.auth.uid && this.props.loginInfo.locationID === null){
            this.props.refreshState(this.props.loginState.auth.uid)
        }
        if(this.props.loginInfo.locationID != null){
            return (
                <DinerHalls locationID={this.props.loginInfo.locationID} />
            )
        }
        else{
            return (
                <div>
                    
                </div>
            )
        }
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