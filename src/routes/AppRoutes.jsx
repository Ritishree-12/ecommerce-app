import { Routes, Route } from "react-router-dom";
import Home from "../components/layout/Home";
import ProductList from "../features/product/ProductList";
import CartPage from "../features/cart/CartPage";
import Login from "../features/auth/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* SHOP CATEGORIES */}
      <Route path="/shop/:category" element={<ProductList />} />

      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
