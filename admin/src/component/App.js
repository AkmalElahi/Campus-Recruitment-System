import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './login';
import Home from './home';
import { PrivateRoute } from './provateRoute';
import {Route} from 'react-router-dom'
import Company from './Company';
import Student from './Student'
class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <PrivateRoute exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route  path="/company" component={Company}/>
                        <Route path="/student" component={Student}/>
                    </div>
                </BrowserRouter>
            </div>);
    }
}

export default App;