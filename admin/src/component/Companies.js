import React, { Component } from 'react'
import image from '../images/expedientlogo.png'
import { Link } from 'react-router-dom';
const url = "http://localhost:3000/company"

class Companies extends Component {
    constructor() {
        super()
        this.state = {
            companies: []
        }
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
                let { companies } = this.state
                const newcompanies = companies.filter(student => student._id !== res._id)
                console.log(newcompanies)
                this.setState({
                    companies: newcompanies
                })

            })
    }
    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                let companies = res
                //console.log(companies)
                this.setState({
                    companies: companies
                })
                console.log(this.state.companies)
            }
            )

    }

    render() {
        const { companies } = this.state
        return (<div className="container">
            <h3>List of companies</h3>
            <div className="row">
                {companies.map(company => (
                    <ul className="collection" key={company._id}>
                        <li class="collection-item avatar">
                            <img src={image} alt="img" className="circle" />
                            <span className="title">{company.name}</span>
                            <p>{company.email}</p>
                            <button className=" btn-small waves-effect waves-light indigo black-text "> <Link to={{
  pathname: '/company',
state:{  company:
company}
}}>view more</Link></button>
                            <button className="secondary-content btn-floating btn-medium  waves-effect waves-light red" type="submit" onClick={() => { this.deleteCompany(company._id) }}>
                                <i class="material-icons">delete</i></button>

                        </li>

                    </ul>


                ))}
            </div>

        </div>
        );
    }
}
export default Companies;

{/* <li class="collection-item avatar">
<i class="material-icons circle">folder</i>
<span class="title">Title</span>
<p>First Line <br />
    Second Line
</p>
<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
</li>
<li class="collection-item avatar">
<i class="material-icons circle green">insert_chart</i>
<span class="title">Title</span>
<p>First Line <br />
    Second Line
</p>
<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
</li>
<li class="collection-item avatar">
<i class="material-icons circle red">play_arrow</i>
<span class="title">Title</span>
<p>First Line <br />
    Second Line
</p>
<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
</li>
      <div key={company._id}>
                        <h3>company: {company.name}</h3>
                        <h4>Email: {company.email}</h4>
                        <h4>Vacancies:</h4>
                        {company.jobs.map(job => (
                            <div key={job._id}>
                                <h3>job type: {job.job}  </h3>
                                <h4>description:</h4> <p>{job.desc}</p>
                                <h4> location: {job.location} || No. of Positions: {job.positions}
                                </h4>

                            </div>
                        ))}
                        <button className="btn btn-danger" type="submit" onClick={() => { this.deleteCompany(company._id) }}>Remove company</button>
                    </div> */

}