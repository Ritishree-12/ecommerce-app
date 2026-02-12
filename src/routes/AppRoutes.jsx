import { Routes, Route } from "react-router-dom";
import ProductList from "../features/product/ProductList";
import CartPage from "../features/cart/CartPage";
import Login from "../features/auth/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
