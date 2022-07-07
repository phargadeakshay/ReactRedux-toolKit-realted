import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import cartReducer from "./CartSlice";
import showdetailsReducer from "./CakeDetailsSlice";
import secondReducer from "./CakeDetailsSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    details: showdetailsReducer,
    // idforcake: secondReducer,
  },
});

export default store;
