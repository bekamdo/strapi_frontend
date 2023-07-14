"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/cart/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
