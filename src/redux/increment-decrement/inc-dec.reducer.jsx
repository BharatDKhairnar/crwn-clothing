const INTIAL_STATE = 0;

const addSubstract = (state = INTIAL_STATE, action) => {
    if(action.type === "INCREMENT") {
        return state + action.payload
    } else if(action.type === "DECREMENT") {
        return state - 1 
    } else {
        return state;
    }
}

export default addSubstract;