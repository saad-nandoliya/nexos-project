import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Services from "../../pages/client/services/Services";
import Layout from "../../components/Layout";

const ServicesRoute = () => {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.key}>
        <Route element={<Layout />}>
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </div>
  );
};  

export default ServicesRoute;
