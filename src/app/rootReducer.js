import authReducer from "../features/auth/authSlice";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";

export const rootReducer = {
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
};
