import { userConstants } from './action-types'
import * as alertActions from './alert-student-actions'
// function authHeader() {
//     // return authorization header with jwt token
//     let user = JSON.parse(localStorage.getItem('user'));

//     if (user && user.token) {
//         return { 'Authorization': 'Bearer ' + user.token };
//     } else {
//         return {};
//     }
// }

const url = "http://localhost:3000/";


export function getData() {
    let dataToFetch = localStorage.getItem('account type') === 'student' ? 'company' : 'student';
    console.log("fetch data " + dataToFetch)
    return dispatch => {
        dispatch(request());
        fetch(`${url}${dataToFetch}`)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error)
                }
                console.log("in get data")
                console.log(res)
                dispatch(success(res))
                return res
            }).catch(error => {
                dispatch(failure(error))
            })
    }
    function request() { return { type: userConstants.GET_DATA_REQUEST } }
    function success(profiles) { return { type: userConstants.GET_DATA_SUCCESS, profiles } }
    function failure(error) { return { type: userConstants.GET_DATA_FAILURE, error } }
}
export function register(user, history, accountType) {
    // console.log("acc in register " + accountType)
    // localStorage.setItem('account type', accountType)
    return dispatch => {
        dispatch(request(user));
        fetch(`${url}${accountType}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(res => {
                console.log("in register")
                console.log(res)
                if (res.errmsg) {
                    //console.log("in error")
                    //console.log(res)
                    throw (res.errmsg)
                }
                dispatch(success())
                history.push('/login')
                dispatch(alertActions.success('Register successful'))
                return res

            }).catch(error => {
                //console.log("in catch")
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            })
    }
    // then(res=>{
    //     res.json()
    //     console.log("in register")
    //     console.log(res)
    //     if(res.status===200){
    //         dispatch(success(res))
    //         history.push('/login');
    //         dispatch(alertActions.success('Register successful'))
    //         return res
    //     }
    // },
    // error=>{
    //     dispatch(failure(error.toString()))
    //     dispatch(alertActions.error(error.toString()))

    // }
    // )


    function request(user) { return { type: userConstants.STUDENT_REGISTER_REQUEST, user } }
    function success() { return { type: userConstants.STUDENT_REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.STUDENT_REGISTER_FAILURE, error } }
}

export function login(email, password, history, accountType) {
    return dispatch => {
        dispatch(request({ email }))
        console.log(email, password)
        fetch(`${url}${accountType}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }).then(res => res.json())
            .then(res => {
                if (res.errmsg) {
                    console.log("in error")
                    console.log(res)
                    throw (res.errmsg)
                }
                console.log(res)
                localStorage.setItem('user', JSON.stringify(res.user.name))
                localStorage.setItem('id', JSON.stringify(res.user._id))
                localStorage.setItem('account type', accountType)
                localStorage.setItem('token', JSON.stringify(res.token))
                dispatch(success(res.user));

                history.push('/')
                return res.user

            }
            ).catch(error => {
                console.log("in catch")
                console.log(error)
                dispatch(failure("login failed!! email or password is wrong"))
                dispatch(alertActions.error("login failed!! email or password is wrong"))
            })
    }
    function request(user) { return { type: userConstants.STUDENT_LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.STUDENT_LOGIN_SUCCESS, user } }
    function failure(user) { return { type: userConstants.STUDENT_LOGIN_FAILURE, user } }
}

// ).then(user => {
//     dispatch(success(user));
//     history.push('/')
// },
//     error => {
//         dispatch(failure(error.toString()))
//         dispatch(alertActions.error(error.toString()))
//     }
//     user => {
//         console.log("in login")
//         console.log(user)
//         localStorage.setItem('token', JSON.stringify(user.token))
//         return user;
//     }
// }

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('account type')
    localStorage.removeItem('id')
    localStorage.removeItem('user')
    return { type: userConstants.STUDENT_LOGOUT }
}