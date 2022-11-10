import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart', 
    initialState:{
        cartProductIds:[]
    },
    reducers:{
        addToCart: (state, action)=>{
            state.cartProductIds = [action.payload , ...state.cartProductIds]
        },
        removeFromCart:(state,action)=>{
            const indexOfId = state.cartProductIds.indexOf(action.payload)
            state.cartProductIds.splice(indexOfId, 1)

        },
        clearAllItems: (state, action)=>{
            state.cartProductIds = []
        }
    }
})

//const {actions:cartActions , reducer:cartReducer } = cartSlice

export default cartSlice