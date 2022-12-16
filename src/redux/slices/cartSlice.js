import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
//   let data = await axios
//     .get("http://localhost:3004/cartProduct")
//     .then((res) => {
//       return res.data;
//     })
//     .catch((res) => {
//       console.log("loi", res);
//     });
//   return data;
// });
// export const addProduct = createAsyncThunk(
//   "cart/addProduct",
//   async (addProduct) => {
//     let data = await axios
//       .post("http://localhost:3004/cartProduct", addProduct)
//       .then((res) => {
//         return res.data;
//       })
//       .catch((res) => {
//         {
//           console.log("loix", res);
//         }
//       });
//     console.log("add", data);
//     return data;
//   }
// );
// export const updateProduct = createAsyncThunk(
//   "cart/updateProduct",
//   async (updateProduct) => {
//     let data = await axios
//       .put(
//         `http://localhost:3004/cartProduct/${updateProduct.id}`,
//         updateProduct
//       )
//       .then((res) => {
//         return res.data;
//       })
//       .catch((res) => {
//         {
//           console.log("loix", res);
//         }
//       });
//     return data;
//   }
// );
// export const deleteProduct = createAsyncThunk(
//   "cart/deleteProduct",
//   async (deleteProduct) => {
//     let data = await axios
//       .delete(`http://localhost:3004/cartProduct/${deleteProduct.id}`)
//       .then((res) => {
//         console.log("delete", deleteProduct.id);

//         return res.data;
//       })
//       .catch((res) => {
//         {
//           console.log("loix", res);
//           console.log("delete", deleteProduct);
//         }
//       });

//     console.log("cart/addProduct", data);
//     return data;
//   }
// );
function sumQuantity(cartProduct) {
  let sumProduct = 0;
  for (let i = 1; i < cartProduct.length; i++) {
    sumProduct += cartProduct[i].quantity;
  }
  return sumProduct;
}

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const cartQuantity = sumQuantity(cartItems);
const cartSlice = createSlice({
  name: "cartProduct",
  initialState: { cartItems, cartQuantity },
  reducers: {
    addProduct: (state, action) => {
      state.cartItems.push(action.payload);
      state.cartQuantity += action.payload.quantity;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateProduct: (state, action) => {
      const indexProduct = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );
      if (indexProduct) {
        state.cartQuantity +=
          action.payload.quantity - state.cartItems[indexProduct].quantity;
        state.cartItems[indexProduct] = {
          ...state.cartItems[indexProduct],
          ...action.payload,
        };
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    deleteProduct: (state, action) => {
      const cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      ); 
      state.cartItems = cartItems;
      state.cartQuantity += -action.payload.quantity;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchCart.fulfilled, (state, action) => {
  //       state = [...action.payload];
  //       console.log("fetch", action.payload, state);
  //     })
  //     .addCase(addProduct.fulfilled, (state, action) => {
  //       state.push(action.payload);
  //     })

  //     .addCase(updateProduct.fulfilled, (state, action) => {
  //       const indexProduct = state.findIndex(
  //         (product) => product.id === action.payload.id
  //       );

  //       state[indexProduct] = {
  //         ...state[indexProduct],
  //         ...action.payload,
  //       };
  //     })
  //     .addCase(deleteProduct.fulfilled, (state, action) => {
  //       console.log(action.payload, "fdsfdsfdsfsdfs");
  //       const indexProduct = state.findIndex(
  //         (product) => product.id === action.payload.id
  //       );
  //       const filteredItems = state.filter((item) => item.id !== valueToRemove);
  //       console.log("ajdjsajda aaaa", filteredItems);
  //       state = state.splice(indexProduct, 1);
  //     });
  //   // .addDefaultCase(fetchCart.fulfilled, (state, action) => {
  //   //   state.cartProduct = action.payload;
  //   //   state.status = "loading";
  //   //   console.log("Adasdsads");
  //   // });
  // },
});

export default cartSlice;
