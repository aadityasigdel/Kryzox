import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SideNavLayout from "../pages/admin/layout/SideNavLayout";
import Overview from "../pages/admin/overview/Overview";
import UserManagement from "../pages/admin/user-management/UserManagement";

const RouteHandler = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/admin" element={<SideNavLayout />}>
        <Route index element={<Overview />} />
        <Route path="/admin/user-management" element={<UserManagement />} />
      </Route>
    </Routes>
  );
};

export default RouteHandler;
