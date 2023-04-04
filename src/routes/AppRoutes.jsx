import { Route, Routes } from "react-router-dom";

import ProductDetails from "../pages/product/ProductDetails";
import NotFound from "../pages/not-found/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/:pid" element={<ProductDetails />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
