import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "cartProduct",
  initialState: [{}],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    changeProduct: (state, action) => {
      const indexProduct = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (indexProduct) {
        state[indexProduct] = { ...state[indexProduct], ...action.payload };
      }
    },
    deleteProduct: (state, action) => {
      const indexProduct = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (indexProduct) {
        state = state.splice(indexProduct, 1);
      }
    },
  },
});
