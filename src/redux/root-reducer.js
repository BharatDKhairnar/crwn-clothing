import { combineReducers } from "redux";
import userReducer from '../redux/user/user.reducer';
import cartReducer from "./cart/cart.reducer";
import addSubstract from "./increment-decrement/inc-dec.reducer";


export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    incdec: addSubstract
});
