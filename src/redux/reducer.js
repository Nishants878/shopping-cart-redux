import { createSlice } from "@reduxjs/toolkit";





const productContainer = createSlice({
    name:"product",
    initialState:{
        productCart:[],
       
       
    },
    reducers:{
        productAdded: (state, action) =>{
            state.productCart.push(action.payload);
        }
      
       
    }

});
export const { productAdded, } = productContainer.actions

export const reducer = productContainer.reducer;