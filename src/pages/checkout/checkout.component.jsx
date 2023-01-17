import React from "react";

import './checkout.styles.scss';

import { connect } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { createStructuredSelector } from 'reselect';

import { selectCartTotal , selectCartItems } from "../../redux/cart/cart.selectors";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";


const checkoutPage = ({ cartItems, total }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
            </div>
            {
                cartItems.length ?
                cartItems.map( item =>
                   <CheckoutItem cartItem={item} key={item.id}/>
                ) : <span className="empty-message">There is no item</span>
            }
            <div className='total'>TOTAL: ${total}</div>
            <StripeCheckoutButton price={total} />
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
  });

export default connect(mapStateToProps) (checkoutPage);