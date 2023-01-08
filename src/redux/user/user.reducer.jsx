const INTIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INTIAL_STATE, action) => {
    if(action.type === "SET_CURRENT_USER") {
        return {
            ...state,
            currentUser:action.payload
        };                                                  
    } else {
        return state;
    }
}

export default userReducer;