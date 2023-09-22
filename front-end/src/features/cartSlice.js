import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action){

            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
            }
        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )

            state.cartItems = nextCartItems;
        }
    }
});


export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;