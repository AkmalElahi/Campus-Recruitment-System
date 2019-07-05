import React, { Component } from 'react';
import Companies from './Companies';
import Students from './Students';
import { Link } from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seeStudents: false,
            seeCompanies: true
        }
    }
    handleSubmit = (event) => {
        console.log(event.target.name)
        if (event.target.name === 'student') {
            this.setState({
                seeStudents: true,
                seeCompanies: false
            })
        }
        else {
            this.setState({
                seeCompanies: true,
                seeStudents: false
            })
        }
    }
    render() {
        return (
            <div>
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        

                        <ul className="right hide-on-med-and-down">
                            <li><a className="btn btn-primary" type="submit" onClick={this.handleSubmit} name="student">Students</a></li>
                            <li><a className="btn btn-primary" type="submit" onClick={this.handleSubmit} name="company">Companies</a></li>
                            <li><Link to='login'>Logout</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>

            <div className="container">
                
              <div className="row">
                  <div className="col s12 offset-s3">
                  <h2>Wellcome Admin</h2>
                  </div>
              <div className="col s12">
                
                {this.state.seeCompanies && <Companies />}
                {this.state.seeStudents && <Students />}
                {/* <button className="waves-effect waves-light btn" type="submit" onClick={this.handleSubmit} value="company">companies</button> */}
            </div>
              </div>
            </div>
            </div>
        );
    }
}

export default Home;