import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addProduct = createAction("ADD_PRODUCT");
export const addProducts = createAction("ADD_PRODUCTS");

export default createReducer(INITIAL_STATE, {
  [addProduct.type]: (state, action) => [...state, action.payload],
  [addProducts.type]: (state, action) => [...action.payload],
});

// Refactoring Código antigo, substituido pela utilização da lib @reduxjs/tookit.
// export default function reducer(state = INITIAL_STATE, action) {
//   if (action.type === "ADD_PRODUTO") {
//     return [...state, action.produto];
//   }
//   return state;
// }

// export const addProduto = (produto) => {
//   return { 
//     type: "ADD_PRODUTO",
//     produto,
//   };
// };
