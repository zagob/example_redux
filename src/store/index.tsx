import { configureStore, CreateSliceOptions } from "@reduxjs/toolkit";
import { categoriasSlice } from "./reducers/categorias";
import itensSlice from "./reducers/itens";
import cartSlice from "./reducers/cart";
import searchSlice from "./reducers/Search";

export interface CategoriasProps {
  name: string;
  thumbnail: string;
  header: string;
  id: string;
  description: string;
}

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    carts: cartSlice,
    search: searchSlice,
  },
});

export default store;
