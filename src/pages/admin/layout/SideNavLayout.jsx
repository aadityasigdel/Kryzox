import React from "react";
import Sidenav from "../sidenav/SideNav";
import MobileSideNav from "../sidenav/MobileSideNav";
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
      <div className="block md:hidden">
      <MobileSideNav />
      </div>
      <div className="hidden md:block w-[292px] bg-[#212121] overflow-y-scroll hide-scrollbar">
        <Sidenav />
      </div>

      {/* Main content (right) */}
      <div className="flex-1 overflow-y-scroll bg-[#101010] hide-scrollbar">
        <Outlet />
      </div>
    </div>
  );
};

export default SideNavLayout;
