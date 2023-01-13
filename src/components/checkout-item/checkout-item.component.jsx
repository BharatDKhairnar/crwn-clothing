import React from "react";

import { connect } from "react-redux";

import { removeItem } from "../../redux/cart/cart.actions";

import './checkout-item.styles.scss';

const checkoutItem = ({ cartItem, removeSelectedItem }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={cartItem.imageUrl} alt='item' />
    </div>
    <span className='name'>{cartItem.name}</span>
    <span className='quantity'>
      <div className="arrow">&#10094;</div>
       <span className="value">{cartItem.quantity}</span>
      <div className="arrow">&#10095;</div>
    </span>
    <span className='price'>{cartItem.price}</span>
    <div className='remove-button' onClick={ () => removeSelectedItem(cartItem) } >&#10005;</div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  removeSelectedItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps) (checkoutItem);