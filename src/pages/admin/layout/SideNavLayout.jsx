import React from "react";
import SideNav from "../sidenav/SideNav";
import { Outlet } from "react-router-dom";
// admin homepage
const SideNavLayout = () => {
  return (
      <div className="flex">
        <SideNav />
        <Outlet />
      </div>
  );
};

export default SideNavLayout;
