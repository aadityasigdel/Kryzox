import React from "react";
import SideNav from "../sidenav/SideNav";
import { Outlet } from "react-router-dom";
import "./style.css";
// admin homepage
const SideNavLayout = () => {
  return (
    // <div className="max-w-[1600px] m-auto flex">
    //   <SideNav />
    //   <div className="hide-scrollbar flex-1 h-screen overflow-y-scroll">
    //   <Outlet />
    //   </div>
    // </div>
    <div className="max-w-[1600px] h-screen m-auto flex overflow-hidden">
      {/* Sidebar (left) */}
      <div className="w-[292px] bg-[#212121] overflow-y-scroll hide-scrollbar">
        <SideNav />
      </div>

      {/* Main content (right) */}
      <div className="flex-1 overflow-y-scroll bg-[#101010] hide-scrollbar">
        <Outlet />
      </div>
    </div>
  );
};

export default SideNavLayout;
