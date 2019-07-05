import React, { Component } from 'react';
import { login, logout } from '../APIs/_login';
class Login extends Component {

    constructor(props) {
        super(props)
        logout()
        this.state = {
            email: '',
            password: '',
            submitted: false,
        }

    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        //this.setState({ submitted: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            login(email, password, this.props.history)
        }
    }
    render() {
        const { email, password, submitted } = this.state
        return (
            <div className="container" >
                <div className="row login">
                    <div className="col s6 offset-s5">
                        <h1>Login</h1>
                    </div>
                    <form name="form" className=" login col s6 offset-s3" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className={' col s12 input-field ' + (submitted && !email ? 'has-error' : '')}>
                                <i className="material-icons email prefix">email</i>
                                <input name="email" type="email" value={email} onChange={this.handleChange} />
                                <label for="email">Email</label>
                                {submitted && !email && <span className="helper-text" >Email is required</span>}
                            </div>
                            <div className={' col s12 input-field ' + (submitted && !password ? 'has-error' : '')} >
                                <i className="material-icons prefix">create</i>
                                <input name="password" value={password} type="password" className="validate " onChange={this.handleChange} />
                                <label for="password" >password</label>
                                {submitted && (!password || password.length < 8) && <span className="helper-text" >password is required</span>}
                            </div>
                            <div className='col s12 input-field'>
                                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
                                </button>

                            </div>
                        </div>

                    </form>
                </div>
            </div>
            /* <form name="form" onSubmit={this.handleSubmit}>
        <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                    <label htmlFor="email">email</label>
                    <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
                    {submitted && !email &&
                        <div className="help-block">email is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                    {submitted && !password &&
                        <div className="help-block">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Login</button>
                    {/* {loggingIn &&
                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" 
                        alt="loader"/>
                    } }
                </div>
        </form>

            <div className="row" >
                <form className="col s6 offset-s3">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className="validate active" />
                            <label for="icon_prefix active">Name</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate" />
                            <label for="email">Email</label>
                            <span class="helper-text" data-error="wrong" data-success="right"></span>
                        </div>
                        <div className={' col s6 input-field ' + (submitted==="abc" ? 'has-error':'') } >
                            <i className="material-icons prefix">phone</i>
                            <input id="icon_telephone" value={this.state.submitted} type="tel" onChange={this.handleChange} />
                            <label for="icon_telephone"  >Telephone</label>
                            {submitted==="abc" && <span className="helper-text" >wrong</span>}
                        </div>

                    </div>
                </form>
            </div> */

        );
    }
}


export default Login;