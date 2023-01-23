import React,{ useContext } from "react";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from "react-redux";

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import CartContext from "../../contexts/cart/cart.context";

import './cart-icon.styles.scss';

const CartIcon = ({ itemCount }) => {
    const toggleCartHidden = useContext(CartContext);
    return (
    <div className="cart-icon" onClick={toggleCartHidden.toggleHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{ itemCount }</span>
    </div>
)}

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps) (CartIcon);