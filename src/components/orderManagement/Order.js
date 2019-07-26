import React, { Component } from 'react'
import {connect} from 'react-redux'
import {refreshState} from '../../store/actions/loginActions'
import {Redirect} from 'react-router-dom'
import DinerHalls from './DinerHalls'
import Sidebar from '../sidebar/Sidebar'
import CompletedOrders from './completedOrders/completedOrders'
class Order extends Component {
    state = {
        currentActive : "A",
        classA: 'orders-active',
        classB: ''
    }
    changeState = (state) => {
        if(state === "A")
            this.setState({
                currentActive: state,
                classA: 'orders-active',
                classB: ''
            })
        else
            this.setState({
                currentActive: state,
                classA: '',
                classB: 'orders-active'
            })
    }
    render() {
        let display = ''
        if(!this.props.loginState.auth.uid) return <Redirect to="/login" />
        else if (this.props.loginState.auth.uid && this.props.loginInfo.locationID === null){
            this.props.refreshState(this.props.loginState.auth.uid)
        }
        if(this.props.loginInfo.locationID != null){
            if(this.state.currentActive === "A"){
                display = <DinerHalls locationID={this.props.loginInfo.locationID} />
            }
            else{
                display = <CompletedOrders locationID={this.props.loginInfo.locationID} />
            }
        }
        return (
            <div>
                <Sidebar />
                <div className="main">
                    <div style={{textAlign: "center",marginTop: '5px',clear:"both"}}>
                        <h6>
                            <span className={this.state.classA} style={{cursor:'pointer'}} onClick={()=>this.changeState("A")}><b>Active Orders</b></span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className={this.state.classB} style={{cursor:'pointer'}} onClick={()=>this.changeState("C")}><b>Completed Orders</b></span>
                        </h6>
                    </div>
                    <br />
                    <div style={{textAlign:"center"}}>
                        {display}
                    </div>
                    
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