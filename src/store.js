import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Features/Products/productSlice";

export const store = configureStore({
  reducer: {
    productList: productSlice,
  },
});
