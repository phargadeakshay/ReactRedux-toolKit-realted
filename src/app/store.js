import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
// import cartReducer from "./CartSlice";
import showdetailsReducer from "./CakeDetailsSlice";
import secondReducer from "./CakeDetailsSlice";
import addtocartReducer from "./AddToCartSlice";
import showItemReducer from "./ShowItemInCartSlice";
import reduceCakeQuantity from "./ReduceCakeQuanSlice";
import cakeRemoveCartReducer from "./CakeRemoveCartSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
    // cart: cartReducer,
    details: showdetailsReducer,
    // idforcake: secondReducer,
    addtocartReducer: addtocartReducer,
    showItemInCart: showItemReducer,
    reduceCakeQuantity: reduceCakeQuantity,
    cakeRemoveCartReducer: cakeRemoveCartReducer,
  },
});

export default store;
