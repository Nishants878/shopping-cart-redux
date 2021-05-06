import { createSlice } from "@reduxjs/toolkit";





const productContainer = createSlice({
    name:"product",
    initialState:{
        productCart:[],
      
       
    },
    reducers:{
        productAdded: (state, action) =>{
            const id = action.payload.id;
            const existingProduct = state.productCart.find((user) => user.id === id);
            if(existingProduct){
             existingProduct.count = existingProduct.count+1
            }else{
                state.productCart.push(action.payload);
            }

          
        },
        deleteProduct: (state, action) =>{
            const { id } = action.payload;
      const existingCard = state.productCart.find((user) => user.id === id);
      if (existingCard) {
          if(existingCard.count > 1){
              existingCard.count = existingCard.count - 1
          }else{
            state.productCart = state.productCart.filter((user) => user.id !== id);
          }
      
      }
        },

        incrementProduct: (state, action) =>{
            const { id } = action.payload;

            const incrementingCard = state.productCart.find((user) => user.id === id);
            if(incrementingCard){
                incrementingCard.count = incrementingCard.count + 1
            }
        },
        checkOutAct: (state, action) =>{
            const { val } = action.payload;
            if(val === "check"){
                state.productCart = []
            }
        }
      
       
    }

});
export const { productAdded, deleteProduct, incrementProduct, checkOutAct } = productContainer.actions

export const reducer = productContainer.reducer;