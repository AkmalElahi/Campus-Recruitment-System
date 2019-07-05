import React from 'react';
import image from '../images/expedientlogo.png';
import { Link } from 'react-router-dom';
const url = "http://localhost:3000/company"
class Company extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            company: this.props.location.state.company
        }
        console.log(this.state.company)
    }
    //console.log(company[0].name)
    deleteJob = (id) => {
        console.log(id)
    }
    deleteCompany = (id) => {
        console.log("delete request")
        console.log(id)

        fetch(`${url}/delete?id=${id}`, {
            method: "delete"
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({
                    company: ''
                })

            })
    }
    render() {
        const { company } = this.state
        if (this.state.company) {
            return (
                <div>
                    <nav>
                        <div className="nav-wrapper">
                            <div className="container">
                                <Link to="/" className="brand-logo">CSR</Link>

                                <ul className="right hide-on-med-and-down">
                                    {/* <li><a className="waves-effect waves-light btn" type="submit" onClick={this.handleSubmit} name="student">Students</a></li>
                                    <li><a className="waves-effect waves-light btn" type="submit" onClick={this.handleSubmit} name="company">Companies</a></li> */}
                                    <li><Link to='login'>Logout</Link></li>
                                    <li><Link to="/" className=" btn-floating btn-large  waves-effect waves-light teal"><i className="material-icons">home</i></Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="col s6 offset-s3">
                                <div className="card card-medium grey lighten-5">
                                    <div className="card-content ">
                                        <div className="row section">
                                            <div className="col s2 ">
                                                <img className="circle responsive-img" src={image} />
                                            </div>
                                            <div className="col s8 offset-s2">
                                                <h5 className=" card-title">{company.name}</h5>
                                                <h5 className="">{company.email}</h5>
                                            </div>
                                        </div>
                                        {company.jobs.map(job => (
                                            <div className="section" key={job._id}>
                                                <div className="row">
                                                    <div className="col s6">
                                                        <h5>Job: {job.job}</h5>
                                                    </div>
                                                    <div className="col s6">
                                                        <h5>description: {job.desc}</h5>
                                                    </div>
                                                    <div className="col s6">
                                                        <h5>positions: {job.positions}</h5>
                                                    </div>
                                                    <div className="col s6">
                                                        <h5>Job Location: {job.location}</h5>
                                                    </div>

                                                </div>

                                            </div>
                                        ))}

                                    </div>
                                    <div className="card-action ">
                                        <div className="row">
                                            <div className="col s2">

                                                <Link to="/" className=" btn-floating btn-large  waves-effect waves-light teal"><i className="material-icons">home</i></Link>
                                            </div>
                                            <div className="col s1 offset-s8">

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            );

        }
        return (
            <div>
                loading...
        </div>
        )
    }

}
export default Company;