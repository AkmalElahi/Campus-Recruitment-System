import { jobConstants } from './action-types';

const url = "http://localhost:3000/company";
export function postJob(job,history){
    return dispatch=>{
        dispatch(request(job))
        console.log("in add job")
        console.log(job)
        fetch(
            fetch(`${url}/postjob`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(job)
            })
            .then(res=>res.json())
            .then(res=>{
                if(res.error){
                    throw(res.error)
                }
                console.log("in get data")
                console.log(res)
                dispatch(success(res))
                history.push('/')
                return res
            }).catch(error=>{
                dispatch(failure(error))
            })
        )
    }
    function request(job){return {type: jobConstants.JOB_POST_REQUEST, job}}
    function success(job){return{type:jobConstants.JOB_POST_SUCCESS,job}}
    function failure(error){return{type:jobConstants.JOB_POST_FAILURE,error}}
}