
import { userConstants } from "../actions/action-types";

export function profiles(state = null, action) {
    switch (action.type) {
        case userConstants.GET_DATA_REQUEST:
            return {
                loading: true
            };
        case userConstants.GET_DATA_SUCCESS:
            return {
                profiles: action.profiles
            }
        case userConstants.STUDENT_REGISTER_FAILURE:
            return{
                error:action.error
            }
            default:
                return{
                    ...state
                }
        
    }
}