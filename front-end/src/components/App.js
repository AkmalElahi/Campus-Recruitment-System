import React from 'react';
import { PrivateRoute } from './privateRoute';
import LoginPage from './../containers/login';
import Register from './../containers/register';
import {clear} from '../actions/alert-student-actions'
import { Route , BrowserRouter } from 'react-router-dom';
import Home from './../containers/homepage';
import { connect } from 'react-redux';
import AddJobs from './../containers/add-jobs';
import Student from './Student';
import Company from './Comapny';


class App extends React.Component{
    constructor(props){
        super(props)
       if(props.history){
        const {history}= this.props
        console.log("in app history")
        console.log(history)
        history.listen((location,action)=>{
            props.clear()
        })
       }
    }
  render(){
    const {alert} = this.props

    return (
        <div>
        <div className="">
                        <div className="">
                            <div className="">
                                {alert.message &&
                                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                                }
                                <BrowserRouter >
                                    <div>
                                        <PrivateRoute exact path="/" component={Home} />
                                        <Route path="/login" component={LoginPage} />
                                        <Route path="/register" component={Register} />
                                        <Route path="/addjob" component={AddJobs}/>
                                        <Route path='/student' component={Student}/>
                                        <Route path='/company' component={Company}/>
                                    </div>
                                </BrowserRouter>
                            </div>
                        </div>
                    </div></div>
          );
  }
}
const mapStateToProps=(state)=>{
    const {alert} = state
    return{
        alert
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        clear:()=>{dispatch(clear())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
