import { combineReducers } from "redux";
import userReducer from '../redux/user/user.reducer';
import cartReducer from "./cart/cart.reducer";
import addSubstract from "./increment-decrement/inc-dec.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    incdec: addSubstract,
    directory: directoryReducer,
    shop:shopReducer
});

export default persistReducer(persistConfig, rootReducer);