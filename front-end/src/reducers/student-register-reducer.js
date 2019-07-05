import {userConstants} from '../actions/action-types'
export function registration(state = {}, action) {
    switch (action.type) {
      case userConstants.STUDENT_REGISTER_REQUEST:
        return { registering: true };
      case userConstants.STUDENT_REGISTER_SUCCESS:
        return {};
      case userConstants.STUDENT_REGISTER_FAILURE:
        return {};
      default:
        return state
    }
  }