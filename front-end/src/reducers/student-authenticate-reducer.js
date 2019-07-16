import { userConstants } from '../actions/action-types';

let token = localStorage.getItem('token');
const initialState = token ? { loggedIn: true, token } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.STUDENT_LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.STUDENT_LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.STUDENT_LOGIN_FAILURE:
      return {};
    case userConstants.STUDENT_LOGOUT:
      return {};
    default:
      return state
  }
}