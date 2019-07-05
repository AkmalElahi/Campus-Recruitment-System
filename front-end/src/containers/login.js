import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout } from '../actions/student-actions';
import { clear } from './../actions/alert-student-actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        const history = this.props.history
        console.log("history")
        console.log(history.listen)
        history.listen((location, action) => {
            this.props.clear()
        })
        const accountType = localStorage.getItem('account type')
        console.log("accountType in login" + accountType)
        this.state = {
            email: '',
            password: '',
            submitted: false,
            accountType: accountType ? accountType : 'student',
            checked:true
        };


    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleAccountChange = (event) => {
            //console.log(event.target.value)
            this.setState({
                accountType:event.target.value,

                checked:!this.state.checked,
            })

    //console.log(this.state.accountType)

    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password, accountType } = this.state;
        console.log(accountType)
        if (email && password) {
            this.props.login(email, password, this.props.history, accountType);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { email, password, submitted, checked } = this.state;
        return (
            <div className="container" >
                <div className="row">
                    <div className="col s6 offset-s5">
                        <h1>Login</h1>
                    </div>
                    <form name="form" className=" login col s6 offset-s3" onSubmit={this.handleSubmit}>
                        <div className=" input-field">
                        <p className="center">Select Account</p>

                                 <p>
                                <label className="col s3 offset-s3">
                                    <input class="with-gap" name="student" value="student" type="radio" checked={checked} onChange={this.handleAccountChange} />
                                    <span>Student</span>
                                </label>
                            </p>
                            <p>
                                <label lassName="col s3">
                                    <input class="with-gap" name="student" value="company" type="radio" checked={!checked} onChange={this.handleAccountChange} />
                                    <span>Company</span>
                                </label>
                            </p>
                        </div>
                        <div className="row">
                            <div className={' col s12 input-field ' + (submitted && !email ? 'has-error' : '')}>
                                <i className="material-icons prefix">email</i>
                                <input name="email" type="email" value={email} onChange={this.handleChange} />
                                <label for="email">Email</label>
                                {submitted && !email && <span className="helper-text" >Email is required</span>}
                            </div>
                            <div className={' col s12 input-field ' + (submitted && !password ? 'has-error' : '')} >
                                <i className="material-icons prefix">create</i>
                                <input name="password" value={password} type="password" className="validate " onChange={this.handleChange} />
                                <label for="password" >password</label>
                                {submitted && !password && <span className="helper-text" >password is required</span>}
                            </div>
                            <div className='col s12 input-field'>
                                <button className="col s5 btn waves-effect waves-light" type="submit" name="action">Login
                                <i class="material-icons right">send</i>
                                </button>
                                <Link to="/register" className="col s5 offset-s2 btn btn-link blue">Register</Link>
                            </div>
                        </div>

                    </form>
                </div>
                <div>


                </div>
            </div>
            // <div className="col-md-6 col-md-offset-3">
            //     <h2>Login</h2>
            //     <form name="form" onSubmit={this.handleSubmit}>
            //     <div className="form-group">
            //                 <label htmlFor="name">
            //                     Select Account
            //                 <select value={accountType} onChange={this.handleAccountChange}>
            //                         <option value="student">Student</option>
            //                         <option value="company">Company</option>
            //                     </select>
            //                 </label>
            //             </div>
            //         <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
            //             <label htmlFor="email">email</label>
            //             <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
            //             {submitted && !email &&
            //                 <div className="help-block">email is required</div>
            //             }
            //         </div>
            //         <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            //             <label htmlFor="password">Password</label>
            //             <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
            //             {submitted && !password &&
            //                 <div className="help-block">Password is required</div>
            //             }
            //         </div>
            //         <div className="form-group">
            //             <button className="btn btn-primary">Login</button>
            //             {loggingIn &&
            //                 <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" 
            //                 alt="loader"/>
            //             }
            //             <Link to="/register" className="btn btn-link">Register</Link>
            //         </div>
            //     </form>
            // </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("in login")
    console.log(state)
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}
const mapDispatchToprops = (dispatch) => {
    return {
        login: (email, password, history, accountType) => { dispatch(login(email, password, history, accountType)) },
        logout: () => { dispatch(logout()) },
        clear: () => { dispatch(clear()) }
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(LoginPage);
