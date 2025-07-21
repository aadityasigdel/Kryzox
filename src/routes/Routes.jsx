import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SideNavLayout from "../pages/admin/layout/SideNavLayout";
import Overview from "../pages/admin/overview/Overview";
import UserManagement from "../pages/admin/user-management/UserManagement";
import FullMapRooms from "../pages/admin/full-map-rooms/FullMapRooms";
import RoomManagement from "../pages/admin/room-management/RoomManagement";

const RouteHandler = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/admin" element={<SideNavLayout />}>
        <Route index element={<Overview />} />
        <Route path="/admin/user-management" element={<UserManagement />} />
        <Route path="/admin/full-map-rooms" element={<FullMapRooms />} />
        <Route path="/admin/room-management" element={<RoomManagement />} />
      </Route>
    </Routes>
  );
};

export default RouteHandler;
