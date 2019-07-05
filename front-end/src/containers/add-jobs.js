import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postJob } from '../actions/add-job-actions';
class AddJobs extends Component {
    constructor(props){
        super(props)
        this.state={
            job:{
                job:'',
                desc:'',
                location:'',
                positions:''
            },
            submitted:false
        }
    }

    handleChange =(e)=>{
        const { name, value } = e.target;
        const {job} = this.state
        this.setState({job: {
            ...job,
            [name]: value
        }});
    }

    handleSubmit=(e)=>{
            e.preventDefault();
           const {postJob,_id,history} = this.props
           this.setState({
               submitted:true
           })
           const {job}=this.state
           if(job.job && job.desc && job.location && job.positions)
           {
            postJob({_id,job},history);
           }
    }
    render() {
        const {job,submitted} = this.state
        const {Posting} = this.props
        return (
           // <div>
        //     <form name="form" onSubmit={this.handleSubmit}>
         
        //         <div className={'form-group' + (submitted && !job.job ? ' has-error' : '')}>
        //             <label htmlFor="job">job</label>
        //             <input type="text" className="form-control" name="job" value={job.job} onChange={this.handleChange} />
        //             {submitted && !job.job &&
        //                 <div className="help-block">Name is Required</div>
        //             }
        //         </div>
        //         <div className={'form-group' + (submitted && !job.desc ? ' has-error' : '')}>
        //             <label htmlFor="desc">desc</label>
        //             <input type="text" className="form-control" name="desc" value={job.desc} onChange={this.handleChange} />
        //             {submitted && !job.desc &&
        //                 <div className="help-block">desc is required</div>
        //             }
        //         </div>
        //         <div className={'form-group' + (submitted && !job.location ? ' has-error' : '')}>
        //             <label htmlFor="location">location</label>
        //             <input type="text" className="form-control" name="location" value={job.location} onChange={this.handleChange} />
        //             {submitted && !job.location &&
        //                 <div className="help-block">location is required</div>
        //             }
        //         </div>
        //         <div className={'form-group' + (submitted && !job.positions ? ' has-error' : '')}>
        //             <label htmlFor="positions">no of postions</label>
        //             <input type="text" className="form-control" name="positions" value={job.positions} onChange={this.handleChange} />
        //             {submitted && !job.positions &&
        //                 <div className="help-block"> Position is required</div>
        //             }
        //         </div>
        //         <div className="form-group">
        //             <button className="btn btn-primary">Post</button>
        //             {Posting &&
        //                 <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        //                 alt="loader"/>
        //             }
        //             <Link to="/" className="btn btn-link">Cancel</Link>
        //         </div>
        //     </form>

        // </div>
        <div className="container">
            <div className="row">
            <div className="col s6 offset-s4">
                            <h1>Post a Job</h1>
                        </div>
                        <form name="form" className="login col s12" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className={' col s12 input-field ' + (submitted && !job.job ? 'has-error' : '')}>
                                    <i className="material-icons prefix">email</i>
                                    <input name="job" type="text" value={job.job} onChange={this.handleChange} />
                                    <label for="job">Name</label>
                                    {submitted && !job.job && <span className="helper-text" >Job  is required</span>}
                                </div>
                                <div className={' col s12 input-field ' + (submitted && !job.desc ? 'has-error' : '')}>
                                    <i className="material-icons prefix">email</i>
                                    <input name="desc" type="text" value={job.desc} onChange={this.handleChange} />
                                    <label for="desc">Descrption</label>
                                    {submitted && !job.job && <span className="helper-text" >Description is required</span>}
                                </div>
                                <div className={' col s12 input-field ' + (submitted && !job.positions ? 'has-error' : '')}>
                                    <i className="material-icons prefix">email</i>
                                    <input name="positions" type="text" value={job.positions} onChange={this.handleChange} />
                                    <label for="positions">positions</label>
                                    {submitted && !job.positions && <span className="helper-text" >Enter same password</span>}
                                </div>
                                <div className={' col s12 input-field ' + (submitted && !job.location ? 'has-error' : '')}>
                                    <i className="material-icons prefix">email</i>
                                    <input name="location" type="text" value={job.location} onChange={this.handleChange} />
                                    <label for="location">Location</label>
                                    {submitted && !job.job && <span className="helper-text" >Location is required</span>}
                                </div>
                                <div className='col s12 input-field'>
                                    <button className="col s5 btn btn-primary">Post</button>
                                    {Posting &&
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                            alt="loader" />
                                    }
                                    <Link to="/" className="col s5 offset-s2 btn btn-link blue">Cancel</Link>
                                </div>
                            </div>

                        </form>
            </div>
        </div>
        );

    }
}

const mapStateToProps =(state)=>{
    console.log("in add job")
    console.log(state)
    const {Posting}=state.postJob
    const _id= JSON.parse(localStorage.getItem('id'))
    console.log("id "+_id)
    return{
        Posting,
        _id
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        postJob:(job,history)=>{dispatch(postJob(job,history))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddJobs);

