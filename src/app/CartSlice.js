import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAddToCart.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchAddToCart.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchAddToCart.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = CartSlice.actions;
export default CartSlice.reducer;

export const fetchAddToCart = createAsyncThunk("cart/details", async (data) => {
  // const { email, password } = data;
  const mm = JSON.parse(localStorage.getItem("akshaytoken"));
  // const mm = localStorage.getItem("akshaytoken");
  console.log("fetch", mm);
  const res = await fetch(
    "https://apifromashu.herokuapp.com/api/cakecart",

    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${mm}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    }
  );
  const response = await res.json();
  return response;
});

// const CartSlice = createSlice({
//   name: "cart",
//   initialState: [],

//   reducers: {
//     add(state, action) {
//       state.push(action.payload);
//     },
//     remove(state, action) {
//       return state.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const { add, remove } = CartSlice.actions;
// export default CartSlice.reducer;

// axios
//     .post(
//       "https://apifromashu.herokuapp.com/api/cakecart",
//       postData,
//       axiosConfig
//     )
//     .then((res) => {
//       console.log("RESPONSE RECEIVED: ", res);
//       return res;
//     })
//     .catch((err) => {
//       console.log("AXIOS ERROR: ", err);
//       return err;
//     });
