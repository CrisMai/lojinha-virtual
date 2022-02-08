import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addItem = createAction("ADD_ITEM");
export const removeItem = createAction("REMOVE_ITEM");
export const removeAllProducts = createAction("REMOVE_ALL_PRODUCTS");

export default createReducer(INITIAL_STATE, {
  [addItem.type]: (state, action) => [...state, action.payload],
  [removeItem.type]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
  [removeAllProducts.type]: (state) => state = [],
});
