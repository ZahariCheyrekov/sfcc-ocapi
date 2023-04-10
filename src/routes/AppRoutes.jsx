import { Route, Routes } from "react-router-dom";

import ProductDetails from "../pages/product/ProductDetails";
import Cart from "../components/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Order from "../pages/order/Order";
import NotFound from "../pages/not-found/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/:pid" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order/:orderId" element={<Order />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
