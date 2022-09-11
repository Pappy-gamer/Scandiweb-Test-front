import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: localStorage.getItem("cartTotalQuantity")
    ? parseInt(localStorage.getItem("cartTotalQuantity"))
    : 0,
  cartTotalAmount: localStorage.getItem("cartTotalAmount")
    ? parseInt(localStorage.getItem("cartTotalAmount"))
    : 0,
  cartCurrency: { currency: "USD" },
  cartCurrencySymbol: { symbol: "$" },
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.ID === action.payload.ID
      );
      console.log(action.payload);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      console.log(itemIndex);

      let tuspy = state.cartItems.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.Prices * currentValue.cartQuantity;
      }, 0);
      console.log(tuspy);

      state.cartTotalAmount = tuspy.toFixed(2);
      state.cartTotalQuantity++;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotalQuantity", state.cartTotalQuantity);
      localStorage.setItem("cartTotalAmount", state.cartTotalAmount);
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.ID === action.payload.ID
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.ID !== action.payload.ID
        );
        state.cartItems = nextCartItems;
      }
      state.cartTotalQuantity--;

      let tuspy = state.cartItems.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.Prices * currentValue.cartQuantity;
      }, 0);
      console.log(tuspy);

      state.cartTotalAmount = tuspy.toFixed(2);

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotalQuantity", state.cartTotalQuantity);
      localStorage.setItem("cartTotalAmount", state.cartTotalAmount);
    },

    increaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.ID === action.payload.ID
      );
      if (state.cartItems[itemIndex].cartQuantity > 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }
      state.cartTotalQuantity++;

      let tuspy = state.cartItems.reduce((accumulator, currentValue) => {
        console.log(accumulator);
        console.log(currentValue);
        return accumulator + currentValue.Prices * currentValue.cartQuantity;
      }, 0);

      let newVal = tuspy - state.cartItems[itemIndex].Prices;
      console.log(newVal);

      state.cartTotalAmount = tuspy.toFixed(2);

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotalQuantity", state.cartTotalQuantity);
      localStorage.setItem("cartTotalAmount", state.cartTotalAmount);
    },

    clearBag(state, action) {
      state.cartItems = [];
      state.cartTotalAmount = 0;
      state.cartTotalQuantity = 0;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotalQuantity", state.cartTotalQuantity);
      localStorage.setItem("cartTotalAmount", state.cartTotalAmount);
    },
  },
});
export const { addToCart, decreaseCart, increaseCart, getTotals, clearBag } =
  cartSlice.actions;
export default cartSlice.reducer;
