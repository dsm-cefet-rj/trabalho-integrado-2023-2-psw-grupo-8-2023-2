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
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
            }
        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )

            state.cartItems = nextCartItems;
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;

            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
                state.cartItems = nextCartItems;
            }
        },
        increaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            state.cartItems[itemIndex].cartQuantity += 1;
        },
        clearCart(state,action) {
            state.cartItems = []
        },
        getTotal(state,action) {
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) =>{
                const {preço, cartQuantity} = cartItem;
                const itemTotal = preço * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal

            }, {
                total: 0,
                quantity: 0,
            })
            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        }
    }
});


export const { addToCart, removeFromCart, decreaseCart, increaseCart, clearCart, getTotal } = cartSlice.actions;
export default cartSlice.reducer;