import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/student-actions';

class Register extends Component {
    state = {
        user: {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            major: '',
            CGPA: '',
            age: '',
        },
        company: {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
        },
        submitted: false,
        accountType: 'student',
        check:true
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const { user, company } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            },
            company: {
                ...company,
                [name]: value
            }
        })
    }
    handleAccountChange = (event) => {
        this.setState({
            accountType:event.target.value,

            check:!this.state.check,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //console.log("in handle submit")
        const { user, accountType, company } = this.state
        console.log(accountType)
        this.setState({
            submitted: true
        })

        if (accountType === 'student' && user.name && user.email && user.password &&
            user.password_confirm && user.CGPA && user.age) {
            console.log("props")
            console.log(this.props.history)
            this.props.studentRegister(user, this.props.history, accountType)
        }
        if (accountType === 'company' && company.name && company.email && company.password && company.password_confirm) {
            //console.log("in coompany if")
            this.props.studentRegister(company, this.props.history, accountType)
        }

    }
    render() {
        const { registering } = this.props;

        const { user, company, submitted, accountType,check } = this.state;
        console.log("acc " + accountType)

        if (accountType === "company") {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col s6 offset-s4">
                            <h1>Register</h1>
                        </div>
                        <form name="form" className="login col s12" onSubmit={this.handleSubmit}>
                        <div className=" row input-field">
                        <p className="center">Select Account</p>

                                 <p>
                                <label className="col s4 offset-s3">
                                    <input class="with-gap" name="student" value="student" type="radio" checked={check} onChange={this.handleAccountChange} />
                                    <span>Student</span>
                                </label>
                            </p>
                            <p>
                                <label lassName="col s4">
                                    <input class="with-gap" name="student" value="company" type="radio" checked={!check} onChange={this.handleAccountChange} />
                                    <span>Company</span>
                                </label>
                            </p>
                        </div>
                            <div className="row">
                                <div className={' col s12 input-field ' + (submitted && !company.name ? 'has-error' : '')}>
                                    <i className="material-icons prefix">email</i>
                                    <input name="name" type="text" value={company.name} onChange={this.handleChange} />
                                    <label for="name">Name</label>
                                    {submitted && !company.name && <span className="helper-text" >Name  is required</span>}
                                </div>
                                <div className={' col s12 input-field ' + (submitted && !company.email ? 'has-error' : '')}>
                                    <i className="material-icons prefix">email</i>
                                    <input name="email" type="email" value={company.email} onChange={this.handleChange} />
                                    <label for="email">Email</label>
                                    {submitted && !company.email && <span className="helper-text" >Email is required</span>}
                                </div>
                                <div className={' col s12 input-field ' + (submitted && !company.password ? 'has-error' : '')}>
                                    <i className="material-icons prefix">password</i>
                                    <input name="password" type="password" value={company.password} onChange={this.handleChange} />
                                    <label for="password">Password</label>
                                    {submitted && !company.password && <span className="helper-text" >password is required</span>}
                                </div>
                                <div className={' col s12 input-field ' + (submitted && !company.password_confirm ? 'has-error' : '')}>
                                    <i className="material-icons prefix">password</i>
                                    <input name="password_confirm" type="password" value={company.password_confirm} onChange={this.handleChange} />
                                    <label for="password_confirm">confirm Password</label>
                                    {submitted && !company.password_confirm && <span className="helper-text" >Enter same password</span>}
                                </div>
                                <div className='col s12 input-field'>
                                    <button className="col s5 btn btn-primary">Register</button>
                                    {registering &&
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                            alt="loader" />
                                    }
                                    <Link to="/login" className="col s5 offset-s2 btn btn-link blue">Cancel</Link>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            )
        }
        if (accountType === 'student') {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col s6 offset-s4">
                            <h1>Register</h1>
                        </div>
                        <form name="form" className="login col s12" onSubmit={this.handleSubmit}>
                        <div className=" row input-field">
                        <p className="center">Select Account</p>

                                 <p>
                                <label className="col s4 offset-s3">
                                    <input className="with-gap" name="student" value="student" type="radio" checked={check} onChange={this.handleAccountChange} />
                                    <span>Student</span>
                                </label>
                            </p>
                            <p>
                                <label lassName="col s4">
                                    <input className="with-gap" name="student" value="company" type="radio" checked={!check} onChange={this.handleAccountChange} />
                                    <span>Company</span>
                                </label>
                            </p>
                        </div>
                            <div className="row">
                            <div className={' col s12 input-field ' + (submitted && !user.name ? 'has-error' : '')}>
                                    <i className="material-icons prefix">email</i>
                                    <input name="name" type="text" value={user.name} onChange={this.handleChange} />
                                    <label for="name">Name</label>
                                    {submitted && !user.name && <span className="helper-text" >Email is required</span>}
                                </div>
                                <div className={' col s12 input-field ' + (submitted && !user.email ? 'has-error' : '')}>
                                    <i className="material-icons prefix">email</i>
                                    <input name="email" type="email" value={user.email} onChange={this.handleChange} />
                                    <label for="email">Email</label>
                                    {submitted && !user.email && <span className="helper-text" >Email is required</span>}
                                </div>
                                <div className={' col s6 input-field ' + (submitted && !user.age ? 'has-error' : '')}>
                                    <i className="material-icons prefix">age</i>
                                    <input name="age" type="text" value={user.age} onChange={this.handleChange} />
                                    <label for="age">age</label>
                                    {submitted && !user.age && <span className="helper-text" >age is required</span>}
                                </div>
                                <div className={' col s6 input-field ' + (submitted && !user.CGPA ? 'has-error' : '')}>
                                    <i className="material-icons prefix">cgpa</i>
                                    <input name="CGPA" type="text" value={user.CGPA} onChange={this.handleChange} />
                                    <label for="CGPA">CGPA</label>
                                    {submitted && !user.CGPA && <span className="helper-text" >CGPA is required</span>}
                                </div>
                                <div className={' col s12 input-field ' + (submitted && !user.major ? 'has-error' : '')}>
                                    <i className="material-icons prefix">major</i>
                                    <input name="major" type="text" value={user.major} onChange={this.handleChange} />
                                    <label for="major">Major</label>
                                    {submitted && !user.major && <span className="helper-text" >major is required</span>}
                                </div>
                                <div className={' col s12 input-field ' + (submitted && !user.password ? 'has-error' : '')}>
                                    <i className="material-icons prefix">password</i>
                                    <input name="password" type="password" value={user.password} onChange={this.handleChange} />
                                    <label for="password">Password</label>
                                    {submitted && !user.password && <span className="helper-text" >password is required</span>}
                                </div>
                                <div className={' col s12 input-field ' + (submitted && !user.password_confirm ? 'has-error' : '')}>
                                    <i className="material-icons prefix">password</i>
                                    <input name="password_confirm" type="password" value={user.password_confirm} onChange={this.handleChange} />
                                    <label for="password_confirm">confirm Password</label>
                                    {submitted && !user.password_confirm && <span className="helper-text" >Enter same password</span>}
                                </div>
                                <div className='col s12 input-field'>
                                    <button className=" col s5 btn btn-primary">Register</button>
                                    {registering &&
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                            alt="loader" />
                                    }
                                    <Link to="/login" className="col s5 offset-s2 btn btn-link blue">Cancel</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            );
        }
    }
}
const mapStateToProps = (state) => {
    console.log("in register")
    console.log(state)
    const { registering } = state.registration;
    return {
        registering
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        studentRegister: (user, history, accountType) => {
            dispatch(register(user, history, accountType))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);