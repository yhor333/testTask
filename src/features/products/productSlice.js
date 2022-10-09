import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsListSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {
    addProduts: (state, actions) => {
      state.products = actions.payload;
    },
  },
});

export const productList = (state) => state.productList.products;

export const { addProduts } = productsListSlice.actions;

export default productsListSlice.reducer;
