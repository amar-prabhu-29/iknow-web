import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../../store/actions/loginActions'
import {Redirect} from 'react-router-dom'
import Logo from '../../logo.png'

class Login extends Component{
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })        
    }
    submit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
    }
    render(){
        const textStyle = {
            color: "white",
        }
        const right = {
            float:'right'
        }
        const rowStyle = {
            margin:0
        }
        const height = {
            height: '50vh'
        }
        if(this.props.status.auth.uid) return <Redirect to="/menu" />
        return(
                <div className="row black extend">
                    <div className="col l4"></div>
                    <div className="col l4">
                        <div className="login center-align">
                            <img src={Logo} alt="" className="responsive-img" style={height}/>
                            <form onSubmit={this.submit}>
                                <div className="row" style={rowStyle}>
                                    <div className="input-field col l12">
                                        <input id="email" type="email" className="validate" onChange={this.handleChange} style={textStyle} />
                                        <label htmlFor="email">Username/Email</label>
                                    </div>
                                </div>
                                <div className="row" style={rowStyle}>
                                    <div className="input-field col l12">
                                        <input id="password" type="password" className="validate" onChange={this.handleChange} style={textStyle} />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                                <button className="btn btn-info" type="submit" style={right}>Login</button>
                            </form>
                            <p>{this.props.loginError}</p>
                        </div>
                    </div>
                    <div className="col l4"></div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginError: state.login.loginError,
        login: state.firebase.login,
        status: state.firebase
    }
}

const mapDispathcToProps = (dispatch) => {
    return {
        login : (credentials) => {
            dispatch(login(credentials))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispathcToProps
)(Login)