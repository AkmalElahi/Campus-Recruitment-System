import React from 'react'
import image from '../images/fred-flintstone.png';
import { Link } from 'react-router-dom';
const Student = (props) => {
    const student = props.location.student
    console.log(student)
    //console.log(student[0].name)
    const deleteJob = (id) => {
        console.log(id)
    }
    if (student) {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <div className="container">
                            <Link to="/" className="brand-logo">CRS</Link>

                            <ul className="right hide-on-med-and-down">
                                {/* <li><a className="waves-effect waves-light btn" type="submit" onClick={this.handleSubmit} name="student">Students</a></li>
                                <li><a className="waves-effect waves-light btn" type="submit" onClick={this.handleSubmit} name="student">Companies</a></li> */}
                                <li><Link to="/" className=" btn-floating btn-large  waves-effect waves-light teal"><i className="material-icons">home</i></Link>
                                </li>
                                <li><Link to='login'>Logout</Link></li>
                                <li><Link to='addjob'>Post job</Link></li>
                            </ul>

                        </div>
                    </div>
                </nav>

                <div className="container">

                    <div class="row">
                        <div class="col s6 offset-s3">


                            <div className="card card-medium grey lighten-5">
                                <div className="card-content ">
                                    <div className="row section">
                                        <div className="col s3 ">
                                            <img className="circle responsive-img" src={image} />
                                        </div>
                                        <div className="col s6 offset-s2">
                                            <h5 className=" card-title">{student.name}</h5>
                                            <h5 className="">{student.email}</h5>
                                        </div>


                                    </div>
                                    <div className="row section ">
                                        <div className="col s8">
                                            <h5>Age: {student.age}</h5>
                                        </div>
                                        <div className="col s4 ">
                                            <h5>Graduate: {student.graduate ? 'yes' : 'No'}</h5>
                                        </div>
                                        <div className="col s8">
                                            <h5>Major: {student.major}</h5>
                                        </div>
                                        <div className="col s4 ">
                                            <h5>CGPA: {student.CGPA}</h5>
                                        </div>

                                    </div>


                                    {/* {student.jobs.map(job => (
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
                                            <button className="secondary-content btn-floating btn-small  waves-effect waves-light red" type="submit" onClick={() => { deleteJob(student._id) }}>
                                                <i class="material-icons">delete</i></button>
                                        </div>
                                    ))} */}

                                </div>
                                {/* <div class="card-action">
                                    <a href="#">This is a link</a>
                                    <a href="#">This is a link</a>
                                </div> */}
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
export default Student;