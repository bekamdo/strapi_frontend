"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartInterface {
  id: number;
  title: string;
  desc: string;
  price: number;
  img: string;
  quantity: number;
}

let product: Array<CartInterface> = [];

const initialState = {
  product,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<CartInterface>) => {
      const item = state.product.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.product.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.product = [];
    },
  },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
