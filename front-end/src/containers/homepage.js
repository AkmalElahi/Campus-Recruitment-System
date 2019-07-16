import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import image from '../images/fred-flintstone.png'
import { getData } from '../actions/student-actions'
import { clear } from './../actions/alert-student-actions';

class Home extends Component {
    constructor(props) {
        super(props)

        const history = this.props.history
        console.log("history")
        console.log(history)
        history.listen((location, action) => {
            this.props.clear()

        })
        console.log("history after ")
        console.log(history)
    }
    componentDidMount() {
        this.props.getData()
    }
    render() {
        const { user, profiles } = this.props
        const accountType = localStorage.getItem('account type')
        if (accountType === 'company') {
            return (
                <div>
                    <nav className="nav-wrapper">
                        <div className="container">
                            <Link to="/" className="brand-logo">CRS</Link>

                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/login" className="btn btn-link">Logout</Link></li>
                                <li>{accountType === 'company' && <Link to="/addjob" className="btn btn-link">Post a job</Link>}</li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                {profiles.loading && <em>Loading users...</em>}
                                {profiles.error && <span className="text-danger">ERROR: {profiles.error}</span>}
                                <h3 className="center">Welome {user && user}!</h3>
                                <h3 className="center"> List of registered Students</h3>
                                {/* {profiles.loading && <em>Loading users...</em>}
                    {profiles.error && <span className="text-danger">ERROR: {profiles.error}</span>}
                    {profiles.profiles &&
                        <div>
                            {profiles.profiles.map((user, index) =>

                                <div key={user._id}>
                                    <h3>Name: {user.name}</h3>
                                    <h4>Email: {user.email}</h4>
                                    <h4>CGPA {user.CGPA} || graduate {user.graduate ? "yes" : "No"} </h4>

                                </div>
                            )}
                        </div>
                    } */}

                                <div className="col s12">
                                    {profiles.profiles && profiles.profiles.map(student => (
                                        <ul className="collection" key={student._id}>
                                            <li className="collection-item avatar">
                                                <img src={image} alt="img" className="circle" />
                                                <span className="title">{student.name}</span>
                                                <p>{student.email}</p>

                                                <button className=" secondary-content btn-small waves-effect waves-light teal  "> <Link className="white-text" to={{
                                                    pathname: '/student',
                                                    student:
                                                        student
                                                }}>view more</Link></button>
                                            </li>
                                        </ul>
                                    ))}
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        if (accountType === "student") {
            return (
                <div>
                    <nav className="nav-wrapper">
                        <div className="container">
                            <Link to="/" className="brand-logo">CRS</Link>

                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/login" className="btn btn-link">Logout</Link></li>
                                <li>{accountType === 'company' && <Link to="/addjob" className="btn btn-link">Post a job</Link>}</li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">

                        <div className="row">
                            <div className="col s12">
                                {profiles.loading && <em>Loading users...</em>}
                                {profiles.error && <span className="text-danger">ERROR: {profiles.error}</span>}
                                <h3 className="center">Welome {user && user}!</h3>
                                <h3 className="center"> List of Companies</h3>
                                {/* {profiles.loading && <em>Loading users...</em>}
                    {profiles.error && <span className="text-danger">ERROR: {profiles.error}</span>}
                    {profiles.profiles &&
                        <div>
                            {profiles.profiles.map((user, index) =>

                                <div key={user._id}>
                                    <h3>Name: {user.name}</h3>
                                    <h4>Email: {user.email}</h4>
                                    <h4>CGPA {user.CGPA} || graduate {user.graduate ? "yes" : "No"} </h4>

                                </div>
                            )}
                        </div>
                    } */}

                                <div className="col s12">
                                    {profiles.profiles && profiles.profiles.map(company => (
                                        <ul className="collection" key={company._id}>
                                            <li className="collection-item avatar">
                                                <img src={image} alt="img" className="circle" />
                                                <span className="title">{company.name}</span>
                                                <p>{company.email}</p>

                                                <button className=" secondary-content btn-small waves-effect waves-light teal  "> <Link className="white-text" to={{
                                                    pathname: '/company',
                                                    state: {
                                                        company:
                                                            company
                                                    }
                                                }}>view more</Link></button>
                                            </li>
                                        </ul>
                                    ))}
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (<div>
            Home page
            </div>)

    }
}
const mapStateToProps = (state) => {
    console.log("in home")
    console.log(state)
    const { profiles } = state;
    const user = JSON.parse(localStorage.getItem('user'))
    return {
        profiles,
        user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => { dispatch(getData()) },
        clear: () => { dispatch(clear()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);