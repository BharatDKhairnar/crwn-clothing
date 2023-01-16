import cartActionTypes from '../cart/cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INTIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INTIAL_STATE, action) => {
    if(action.type === cartActionTypes.TOGGLE_CART_HIDDEN) {
        return{
            ...state,
            hidden: !state.hidden
        }
    } else if(action.type === cartActionTypes.ADD_ITEM ) {
        return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
        }
    } else if(action.type === cartActionTypes.CLEAR_ITEM_FROM_CART) {
        return {
            ...state,
            cartItems: state.cartItems.filter( item => item.id !== action.payload.id )
        }
    } else if(action.type === cartActionTypes.REMOVE_ITEM) {
        return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems,action.payload)
        }

    } else {
        return state;
    }
}

export default cartReducer;