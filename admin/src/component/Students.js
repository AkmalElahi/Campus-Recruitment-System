import React, { Component } from 'react'
import image from '../images/fred-flintstone.png';
import { Link } from 'react-router-dom';
const url = "http://localhost:3000/student"
class Students extends Component {
    constructor() {
        super();
        this.state = {
            students: []
        }
    }
    deleteStudent = (id) => {
        console.log("delete request")
        console.log(id)
        fetch(`${url}/delete?id=${id}`, {
            method: "delete"
        })
            .then(res => res.json())
            .then(res => {
                console.log("in delete")
                console.log(res)
                let { students } = this.state
                const newstudents = students.filter(student => student._id !== res._id)
                console.log(newstudents)
                this.setState({
                    students: newstudents
                })

            }
            )
    }
    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(students => {
                //console.log(students)
                this.setState({
                    students: students
                })
                console.log(this.state.students)
            })
    }
    render() {
        const { students } = this.state
        return (
            <div className="container">
                <h3>
                    List of Registered Students       </h3>
                <div className="row">
                    {students.map(student => (
                        <ul className="collection" key={student._id}>
                            <li className="collection-item avatar">
                                <img src={image} alt="img" className="circle" />
                                <span className="title">{student.name}</span>
                                <p>{student.email}</p>
                                <button className=" btn-small waves-effect waves-light indigo black-text "> <Link to={{
                                    pathname: '/student',
                                    student:
                                        student
                                }}>view more</Link></button>
                                <button className="secondary-content btn-floating btn-medium  waves-effect waves-light red" type="submit" onClick={() => { this.deleteStudent(student._id) }}>
                                    <i className="material-icons">delete</i></button>
                            </li>
                        </ul>
                    ))}
                </div>


            </div>);
    }
}
export default Students;