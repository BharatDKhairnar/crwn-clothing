import React, { useContext } from "react";

import CustomButton from "../custom-button/custom-button.component";

import CartItem from "../cart-item/cart-item.component";

import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import './cart-dropdown.styles.scss';
import CartContext from "../../contexts/cart/cart.context";

const CartDropdown = ({ cartItems, history }) => {
  const { toggleHidden } = useContext(CartContext);
  return (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length ? (
            cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))
            ) : (<span className="empty-message">Your cart is empty</span>) 
            
        }
      </div>
        <CustomButton onClick={ () => { 
                    history.push('/checkout');
                    toggleHidden(); }}>GO TO CHECKOUT</CustomButton>
    </div>
)}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
  });
  
export default withRouter(connect(mapStateToProps) (CartDropdown));