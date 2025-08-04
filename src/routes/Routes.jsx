import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import SideNavLayout from "../pages/admin/layout/SideNavLayout";
import Overview from "../pages/admin/overview/Overview";
import UserManagement from "../pages/admin/user-management/UserManagement";
import FullMapRooms from "../pages/admin/full-map-rooms/FullMapRooms";
import RoomManagement from "../pages/admin/room-management/RoomManagement";
import LiveManagement from "../pages/admin/live-management/LiveManagement";
import Tournaments from "../pages/admin/tournaments/Tournaments";
import TopUpManage from "../pages/admin/top-up-manage/TopUpManage";
import Notification from "../pages/admin/notication/Notification";
import Analytics from "../pages/admin/analytics/Analytics";

// Auth pages
import LoginPage from "../components/auth/Login";
import Logout from "../components/auth/Logout";
import Register from "../components/auth/Register";

// Protection
import AdminProtection from "./AdminProtection";

const RouteHandler = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route exact path="/" element={<Home />} />

      {/* Auth Routes */}
      <Route path="/auth">
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="logout" element={<Logout />} />
      </Route>

      {/* Protected Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <AdminProtection>
            <SideNavLayout />
          </AdminProtection>
        }
      >
        <Route index element={<Overview />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="full-map-rooms" element={<FullMapRooms />} />
        <Route path="room-management" element={<RoomManagement />} />
        <Route path="live-management" element={<LiveManagement />} />
        <Route path="tournaments" element={<Tournaments />} />
        <Route path="top-up-manage" element={<TopUpManage />} />
        <Route path="notification" element={<Notification />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
};

export default RouteHandler;
