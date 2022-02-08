import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItem: [],
    badgeCount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { payload } = action;
            state.badgeCount++;
            let index = state.cartItem.findIndex(item => { return item.id === payload.id });
            if (index >= 0) {
                //item exist
                state.cartItem[index]['quantity']++;
            } else {
                payload['quantity'] = 1;
                payload['price'] = (payload.id/3).toFixed(2);
                state.cartItem.push(payload)
            }           


        },
        decreaseQtn: (state, action) => {
            let index = state.cartItem.findIndex(item => { return item.id === action.payload.id });
            if(state.cartItem[index].quantity == 1){
                state.cartItem.splice(index, 1);
            }else{
                state.cartItem[index]['quantity']--;
            }
            state.badgeCount--;
        },
        removeFromCart: (state, action) => {
            let index = state.cartItem.findIndex(item => { return item.id === action.payload.id });
            state.badgeCount-=state.cartItem[index].quantity;
            state.cartItem.splice(index, 1);
           
        },
    },
})

export const { addToCart, decreaseQtn,removeFromCart } = cartSlice.actions
export default cartSlice.reducer