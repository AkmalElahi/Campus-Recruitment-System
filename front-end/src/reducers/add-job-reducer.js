import { jobConstants } from './../actions/action-types';

export function postJob(state = {}, action) {
    switch (action.type) {
        case jobConstants.JOB_POST_REQUEST:
            return {
                Posting: true
            };
        case jobConstants.JOB_POST_SUCCESS:
            return {
                job: action.job
            }
        case jobConstants.JOB_POST_FAILURE:
            return{
                error:action.error
            }
            default:
                return{
                    ...state
                }
        
    }
}