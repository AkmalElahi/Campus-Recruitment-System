import {combineReducers} from 'redux';

import {alert} from './alert-student-reducer';
import {authentication} from './student-authenticate-reducer';
import {registration} from './student-register-reducer'
import { profiles } from './get-data-reducer';
import { postJob } from '../reducers/add-job-reducer'

const rootReducer = combineReducers({
    authentication,
    registration,
    alert,
    profiles,
    postJob
})

export default rootReducer;