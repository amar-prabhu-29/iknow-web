import React, {Component} from 'react'

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
        console.log(this.state)
    }
    render(){
        return(
            <div className="login container">
                <form onSubmit={this.submit}>
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate" onChange={this.handleChange} />
                        <label htmlFor="email">Username/Email</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="password" type="password" className="validate" onChange={this.handleChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="btn btn-info" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login