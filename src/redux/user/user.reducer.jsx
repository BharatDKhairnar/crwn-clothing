import { userActionTypes } from '../user/user.types';

const INTIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INTIAL_STATE, action) => {
    if(action.type === userActionTypes.SET_CURRENT_USER) {
        return {
            ...state,
            currentUser:action.payload
        };                                                  
    } else {
        return state;
    }
}

export default userReducer;