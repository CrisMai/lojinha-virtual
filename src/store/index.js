import { configureStore } from "@reduxjs/toolkit";

import produtosReducer from "./ducks/products";
import layoutReducer from "./ducks/layout";
import cartReducer from "./ducks/cart";

export default configureStore({
  reducer: {
    products: produtosReducer,
    layout: layoutReducer,
    cart: cartReducer,
  },
});

// Refactoring Código antigo, substituido pela utilização da lib @reduxjs/tookit.
// const rootReducer = combineReducers({
//     produtos: produtosReducer,
//     layout: layoutReducer
// })

// export default createStore(rootReducer);
