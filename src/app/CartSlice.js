import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast'
const initialState = {
  cartState: false,
  cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
};
const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} Added To Cart`)
      } else {
        state.cartItems[index].cartQuantity += 1
        toast.success(`${action.payload.title} + 1`)
      }
      localStorage.setItem('cart',JSON.stringify(state.cartItems))
    },
    setRemoveItemFromCart : (state,action) => {
      const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id)
      state.cartItems = removeItem
      localStorage.setItem('cart',JSON.stringify(state.cartItems))
      toast.success(`${action.payload.title} Removed From Cart`)
    },
    setChangeQuantity : (state,action) => {
      console.log(action.payload);
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} Added To Cart`)
      } else {
        if(action.payload.number === 1)
        {
          state.cartItems[index].cartQuantity += 1
        }
        else{
          if(action.payload.cartQuantity > 1)
          {
            state.cartItems[index].cartQuantity -= 1
          }
          else{
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id)
            state.cartItems = removeItem
            localStorage.setItem('cart',JSON.stringify(state.cartItems))
            toast.success(`${action.payload.title} Removed From Cart`)
          }
        }
      }
      localStorage.setItem('cart',JSON.stringify(state.cartItems))
    }
  },
});

export const { setOpenCart, setCloseCart, setAddItemToCart,setRemoveItemFromCart,setChangeQuantity } =
  cartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems

export default cartSlice.reducer;
