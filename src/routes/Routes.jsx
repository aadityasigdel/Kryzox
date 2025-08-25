import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";

// admin pages
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

// admin tournament pages
import { UpcomingTournaments } from "../pages/admin/tournaments/pages/UpcomingTournaments";
import { ActiveTournaments } from "../pages/admin/tournaments/pages/ActiveTournaments";

// Auth pages
import LoginPage from "../components/auth/Login";
import Logout from "../components/auth/Logout";
import Register from "../components/auth/Register";

// Protection
import AdminProtection from "./AdminProtection";
import TermsAndConditions from "../components/Footer/pages/TermsAndConditions";

// footer pages/components
import LegalCompliance from "../components/Footer/LeagalDoc/LegalCompliance";
import FooterLayout from "../components/Footer/layout/FooterLayout";
import PrivacyPolicy from "../components/Footer/pages/PrivacyPolicy";
import CookiePolicy from "../components/Footer/pages/CookiePolicy";
import AboutUs from "../components/Footer/pages/AboutUs";
import Disclaimer from "../components/Footer/pages/Disclaimer";
import AcceptableUsePolicy from "../components/Footer/pages/AcceptableUsePolicy";
import UserAgreement from "../components/Footer/pages/UserAgreement";
import CountryComplianceMatrix from "../components/Footer/pages/CountryComplianceMatrix";

const RouteHandler = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route exact path="/" element={<Home />} />
      <Route path="/test" element={<UpcomingTournaments />} />
      <Route path="/privacy/legal" element={<LegalCompliance />} />
      {/* footer layout */}
      <Route element={<FooterLayout />}>
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="acceptable-use-policy" element={<AcceptableUsePolicy />} />
        <Route path="user-agreement" element={<UserAgreement />} />
        <Route
          path="country-compliance-matrix"
          element={<CountryComplianceMatrix />}
        />
      </Route>

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

        {/* tournament pages route starts from here*/}
        <Route path="tournaments">
          <Route index element={<Tournaments />} />
          <Route path="active-tournaments" element={<ActiveTournaments />} />
          <Route
            path="upcoming-tournaments"
            element={<UpcomingTournaments />}
          />
        </Route>
        {/* tournament pages route ends here */}
        <Route path="top-up-manage" element={<TopUpManage />} />
        <Route path="notification" element={<Notification />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
};

export default RouteHandler;
