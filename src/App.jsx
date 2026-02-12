import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import ProductList from "./features/product/ProductList";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <ProductList />
      {/* <AppRoutes /> */}
    </>
  );
}
