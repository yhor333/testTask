import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    products: []
}

const productsListSlice = createSlice({
    name: 'productsList',
    initialState,
    reducers: {
        toggleIsLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
        addProduts: (arr,state) => {
            state.products = arr;
        }
    },
  });

  console.log(productsListSlice)

  export const { addProduts } = productsListSlice.actions;
  export const { toggleIsLoading } = productsListSlice.actions;
  export default productsListSlice.reducer;