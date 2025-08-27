import { Route, Routes } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Analytics from "../pages/admin/analytics/Analytics";
import FullMapHandeling from "../pages/admin/full-map-rooms/FullMapHandeling";
import FullMapRooms from "../pages/admin/full-map-rooms/FullMapRooms";
import SideNavLayout from "../pages/admin/layout/SideNavLayout";
import LiveManagement from "../pages/admin/live-management/LiveManagement";
import Notification from "../pages/admin/notication/Notification";
import Overview from "../pages/admin/overview/Overview";
import RoomManagement from "../pages/admin/room-management/RoomManagement";
import TopUpManage from "../pages/admin/top-up-manage/TopUpManage";
import Tournaments from "../pages/admin/tournaments/Tournaments";
import UserManagement from "../pages/admin/user-management/UserManagement";
// Auth pages
import LoginPage from "../components/auth/Login";
import Logout from "../components/auth/Logout";
import Register from "../components/auth/Register";

// Protection
import TermsAndConditions from "../components/Footer/pages/TermsAndConditions";

// footer pages/components
import LegalCompliance from "../components/Footer/LeagalDoc/LegalCompliance";
import FooterLayout from "../components/Footer/layout/FooterLayout";
import AboutUs from "../components/Footer/pages/AboutUs";
import AcceptableUsePolicy from "../components/Footer/pages/AcceptableUsePolicy";
import CookiePolicy from "../components/Footer/pages/CookiePolicy";
import CountryComplianceMatrix from "../components/Footer/pages/CountryComplianceMatrix";
import Disclaimer from "../components/Footer/pages/Disclaimer";
import PrivacyPolicy from "../components/Footer/pages/PrivacyPolicy";
import UserAgreement from "../components/Footer/pages/UserAgreement";
const RouteHandler = () => {
    return (
        <Routes>
            {/* Public Route */}
            <Route exact path="/" element={<Home />} />
            <Route path="/privacy/legal" element={<LegalCompliance />} />
            {/* footer layout */}
            <Route element={<FooterLayout />}>
                <Route
                    path="terms-and-conditions"
                    element={<TermsAndConditions />}
                />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="cookie-policy" element={<CookiePolicy />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="disclaimer" element={<Disclaimer />} />
                <Route
                    path="acceptable-use-policy"
                    element={<AcceptableUsePolicy />}
                    
                />
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
                    // <AdminProtection>
                    <SideNavLayout />
                    // </AdminProtection>
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
                <Route
                    path="full-map-rooms/approvals/:fullmapId"
                    element={<FullMapHandeling />}
                />
            </Route>
        </Routes>
    );
};

export default RouteHandler;
