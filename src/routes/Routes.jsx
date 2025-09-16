import { Route, Routes } from "react-router-dom";

// Pages
import Home from "../pages/Home";

// Admin pages
import Analytics from "../pages/admin/analytics/Analytics";
import FullMapHandeling from "../pages/admin/full-map-rooms/FullMapHandeling";
import FullMapRooms from "../pages/admin/full-map-rooms/FullMapRooms";
import FullMapReward from "../pages/admin/full-map-rooms/FullMapUserList";
import RewardWinners from "../pages/admin/full-map-rooms/RewardWinners";
import SideNavLayout from "../pages/admin/layout/SideNavLayout";
import LiveManagement from "../pages/admin/live-management/LiveManagement";
import Notification from "../pages/admin/notication/Notification";
import Overview from "../pages/admin/overview/Overview";
import RoomManagement from "../pages/admin/room-management/RoomManagement";
import RoomRewards from "../pages/admin/room-management/RoomRewards";
import TopUpManage from "../pages/admin/top-up-manage/TopUpManage";
import Tournaments from "../pages/admin/tournaments/Tournaments";
import { ActiveTournaments } from "../pages/admin/tournaments/pages/ActiveTournaments";
import { UpcomingTournaments } from "../pages/admin/tournaments/pages/UpcomingTournaments";
import UserManagement from "../pages/admin/user-management/UserManagement";
import UserProfile from "../pages/admin/user-management/UserProfile";

// Auth pages
import LoginPage from "../components/auth/Login";
import Logout from "../components/auth/Logout";
import Register from "../components/auth/Register";

// Protection
import TermsAndConditions from "../components/Footer/pages/TermsAndConditions";

// Footer pages/components
import LegalCompliance from "../components/Footer/LeagalDoc/LegalCompliance";
import FooterLayout from "../components/Footer/layout/FooterLayout";
import AboutUs from "../components/Footer/pages/AboutUs";
import AcceptableUsePolicy from "../components/Footer/pages/AcceptableUsePolicy";
import CookiePolicy from "../components/Footer/pages/CookiePolicy";
import CountryComplianceMatrix from "../components/Footer/pages/CountryComplianceMatrix";
import Disclaimer from "../components/Footer/pages/Disclaimer";
import PrivacyPolicy from "../components/Footer/pages/PrivacyPolicy";
import UserAgreement from "../components/Footer/pages/UserAgreement";


// Optional: import AdminProtection if you want to protect admin routes
// import AdminProtection from "../components/auth/AdminProtection";

const RouteHandler = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route exact path="/" element={<Home />} />
            <Route path="/test" element={<UpcomingTournaments />} />
            <Route path="/privacy/legal" element={<LegalCompliance />} />

            {/* Footer Layout Routes */}
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
                    // Uncomment the following line to enable admin protection
                    // <AdminProtection>
                    <SideNavLayout />
                    // </AdminProtection>
                }
            >
                <Route index element={<Overview />} />
                <Route path="full-map-rooms" element={<FullMapRooms />} />
                <Route
                    path="full-map-rooms/approvals/:fullmapId"
                    element={<FullMapHandeling />}
                />
                <Route
                    path="full-map-rooms/results/:fullmapId"
                    element={<FullMapReward />}
                />
                <Route path="room-management" element={<RoomManagement />} />
                <Route path="live-management" element={<LiveManagement />} />
                <Route path="room-management/room-rewards/:roomId" element={<RoomRewards />} />
                
                <Route
                    path="full-map-rooms/results/rewards/:fullmapId"
                    element={<RewardWinners />}
                />
                {/* Users Pages */}
                <Route path="user-management" element={<UserManagement />} />
                <Route path="user-management/users/:id/profile" element={<UserProfile />} />
                
                {/* Tournament Pages */}
                <Route path="tournaments">
                    <Route index element={<Tournaments />} />
                    <Route
                        path="active-tournaments"
                        element={<ActiveTournaments />}
                    />
                    <Route
                        path="upcoming-tournaments"
                        element={<UpcomingTournaments />}
                    />
                </Route>
                <Route path="top-up-manage" element={<TopUpManage />} />
                <Route path="notification" element={<Notification />} />
                <Route path="analytics" element={<Analytics />} />
            </Route>
        </Routes>
    );
};

export default RouteHandler;
