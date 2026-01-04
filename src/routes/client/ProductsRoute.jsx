import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import Infrastructure from "../../pages/client/products/Infrastructure";
import ProductPortfolio from "../../pages/client/prodPortfolio/ProductPortfolio";
// import ProductDetail from "../../pages/client/products/ProductsDetailPage";

const ProductsRoute = () => {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.key}>
        <Route element={<Layout />}>
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/product-portfolio" element={<ProductPortfolio />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ProductsRoute;
