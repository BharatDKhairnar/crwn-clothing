export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 }] // First time new item add when intially cartitems has no data
}

export const removeItemFromCart = (cartItems, cartItemFromRemove) => {
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemFromRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter( (item) => item.id !== cartItemFromRemove.id)
    }

    return cartItems.map(cartItem => 
            cartItem.id === cartItemFromRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )

}