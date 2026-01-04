import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import LeadershipTeam from "../../pages/client/leadership/Leadership";

const LeaderRoute = () => {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.key}>
        <Route element={<Layout />}>
          <Route path="/leadership" element={<LeadershipTeam />} />
        </Route>
      </Routes>
    </div>
  );
};

export default LeaderRoute;
