import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      const newProducts = [...state.items, newProduct];
      state.items = newProducts;
    },
    resetProducts: (state) => {
      state.items = [];
    },
  },
});

export const { addProduct, resetProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
