import { createSlice } from "@reduxjs/toolkit";

interface CartProps {
  id: string;
  quantity: number;
}

const initialState = [] as CartProps[] | [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeCart: (state, { payload }) => {
      const hasItem = state.some((item) => item.id === payload);

      if (!hasItem)
        return [
          ...state,
          {
            id: payload,
            quantity: 1,
          },
        ];

      return state.filter((item) => item.id !== payload);
    },
    changeQuantity: (state, { payload }) => {
      state = state.map((itemCart) => {
        if (itemCart.id === payload.id) itemCart.quantity += payload.quantity;

        return itemCart;
      });
    },
    resetCart: () => initialState,
  },
});

export const { changeCart, changeQuantity, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
