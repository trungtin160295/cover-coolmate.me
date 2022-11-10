import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useAxiosPost from "../../customize/addData";
import useAxiosDelete from "../../customize/deleteData";
import useFetch from "../../customize/fetch";
import axios from "axios";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  let data = await axios
    .get("http://localhost:3004/cartProduct")
    .then((res) => {
      return res.data;
    })
    .catch((res) => {
      console.log("loi", res);
    });
  return data;
});
export const addProduct = createAsyncThunk(
  "cart/addProduct",
  async (addProduct) => {
    let data = await axios
      .post("http://localhost:3004/cartProduct", addProduct)
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        {
          console.log("loix", res);
        }
      });
    console.log("add", data);
    return data;
  }
);
export const updateProduct = createAsyncThunk(
  "cart/updateProduct",
  async (updateProduct) => {
    let data = await axios
      .put(
        `http://localhost:3004/cartProduct/${updateProduct.id}`,
        updateProduct
      )
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        {
          console.log("loix", res);
        }
      });
    return data;
  }
);
export const deleteProduct = createAsyncThunk(
  "cart/deleteProduct",
  async (deleteProduct) => {
    let data = await axios
      .delete(`http://localhost:3004/cartProduct/${deleteProduct.id}`)
      .then((res) => {
        console.log("delete", deleteProduct.id);

        return res.data;
      })
      .catch((res) => {
        {
          console.log("loix", res);
          console.log("delete", deleteProduct);
        }
      });

    console.log("cart/addProduct", data);
    return data;
  }
);

const cartSlice = createSlice({
  name: "cartProduct",
  initialState: [{}],
  // reducers: {
  //   addProduct: (state, action) => {
  //     state.push(action.payload);
  //   },
  //   changeProduct: (state, action) => {
  //     const indexProduct = state.findIndex(
  //       (product) => product.id === action.payload.id
  //     );
  //     if (indexProduct) {
  //       state[indexProduct] = { ...state[indexProduct], ...action.payload };
  //     }
  //   },
  //   deleteProduct: (state, action) => {
  //     const indexProduct = state.findIndex(
  //       (product) => product.id === action.payload.id
  //     );
  //     if (indexProduct) {
  //       state = state.splice(indexProduct, 1);
  //     }
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state = [...action.payload];
        console.log("fetch", action.payload, state);
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.push(action.payload);
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        const indexProduct = state.findIndex(
          (product) => product.id === action.payload.id
        );

        state[indexProduct] = {
          ...state[indexProduct],
          ...action.payload,
        };
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        console.log(action.payload, "fdsfdsfdsfsdfs");
        const indexProduct = state.findIndex(
          (product) => product.id === action.payload.id
        );
        const filteredItems = state.filter((item) => item.id !== valueToRemove);
        console.log("ajdjsajda aaaa", filteredItems);
        state = state.splice(indexProduct, 1);
      });
    // .addDefaultCase(fetchCart.fulfilled, (state, action) => {
    //   state.cartProduct = action.payload;
    //   state.status = "loading";
    //   console.log("Adasdsads");
    // });
  },
});

export default cartSlice;
