import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultTheme } from "./layouts/DefaultTheme";
import { Cart } from "./pages/Cart";
import Categoria from "./pages/Categoria";
import { Home } from "./pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultTheme />}>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:nameCategoria" element={<Categoria />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
