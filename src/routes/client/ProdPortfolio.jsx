import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import ProductPortfolio from "../../pages/client/prodPortfolio/ProductPortfolio";

const ProdPortfolioRoute = () => {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.key}>
        <Route element={<Layout />}>
          <Route path="/product-portfolio" element={<ProductPortfolio />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ProdPortfolioRoute;
