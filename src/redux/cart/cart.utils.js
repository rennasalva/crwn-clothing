export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
                cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemToCart = (cartItems, cartItemRemove)=>{
    return cartItems.filter((cartItem) => cartItem.id != cartItemRemove.id)
}

export const removeItemFromCart = (cartItems, cartItemRemove)=>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemRemove.id
    );

    // se è presente solo un record
    if(existingCartItem.quantity == 1){
        return cartItems.filter((cartItem) => cartItem.id != cartItemRemove.id)
    }
    else{
        return cartItems.map(cartItem =>
            cartItem.id === cartItemRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
    }
}