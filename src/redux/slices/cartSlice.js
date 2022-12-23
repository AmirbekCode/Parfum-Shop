import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmout: 0,
    totalQuanity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
            state.totalQuanity++

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.product,
                    image: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price

                })
            }
            else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmout = state.cartItems.reduce((total, item) => total + Number(item.price) ** Number(item.quantity))
            console.log(state.totalQuanity);
            console.log(state.cartItems);
        },
    },
});

export const cartAction = cartSlice.actions
export default cartSlice.reducer