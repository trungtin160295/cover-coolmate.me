import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./sliceReducer/cartReducer";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
