"use client";
import { Anvil, Plus } from "lucide-react";
import { useEffect, useState, Suspense, lazy } from "react";
import useGetData from "../../../hooks/getData";
import Card from "../ui/shared/Card";
import HeadingSection from "../ui/shared/HeadingSection";
import "./style.css";

const AnalyticsChart = lazy(() => import("./ui/Chart"));
const RecentActivities = lazy(() => import("./ui/RecentActivities"));

const Overview = () => {
    const {
        getData: getUsers,
        result: users,
        loading: loadingUsers,
    } = useGetData();
    const {
        getData: getRooms,
        result: rooms,
        loading: loadingRooms,
    } = useGetData();
    const {
        getData: getTournaments,
        result: tournaments,
        loading: loadingTournaments,
    } = useGetData();
    const {
        getData: getRevenue,
        result: revenue,
        loading: loadingRevenue,
    } = useGetData();

    const [totalUsers, setTotalUsers] = useState(0);
    const [activeRooms, setActiveRooms] = useState(0);
    const [totalTournaments, setTotalTournaments] = useState(0);
    const [monthlyRevenue, setMonthlyRevenue] = useState(0);

    useEffect(() => {
        console.log("Fetching all dashboard data...");
        getUsers("users/");
        getRooms("rooms/status?status=ALL_DONE");
        getTournaments("posts");
        getRevenue("revenue/monthly");
    }, []);

    useEffect(() => {
        console.log("Users loaded:", users);
        setTotalUsers(Array.isArray(users) ? users.length : 0);
    }, [users]);

    useEffect(() => {
        console.log("Rooms loaded:", rooms);
        setActiveRooms(Array.isArray(rooms) ? rooms.length : 0);
    }, [rooms]);

    useEffect(() => {
        console.log("Tournaments loaded:", tournaments);
        setTotalTournaments(tournaments?.content?.length || 0);
    }, [tournaments]);

    useEffect(() => {
        console.log("Revenue loaded:", revenue);
        setMonthlyRevenue(
            Array.isArray(revenue) && revenue.length > 0 ? revenue[0].amount : 0
        );
    }, [revenue]);

    const CardData = [
        {
            gradientColor: { color1: "#B05BDB", color2: "#202020" },
            heading: "Total Users",
            totalData: totalUsers,
            totalPercentage: "+10%",
            icon: "/admin/overview/icon1.png",
        },
        {
            gradientColor: { color1: "#800080", color2: "#202020" },
            heading: "Completed Rooms",
            totalData: activeRooms,
            totalPercentage: "+8%",
            icon: "/admin/overview/icon2.png",
        },
        {
            gradientColor: { color1: "#BA55D3", color2: "#202020" },
            heading: "Tournaments",
            totalData: totalTournaments,
            totalPercentage: "+16%",
            icon: "/admin/overview/icon3.png",
        },
        {
            gradientColor: { color1: "#7400BB", color2: "#202020" },
            heading: "Monthly Revenue",
            totalData: `$${monthlyRevenue}`,
            totalPercentage: "+24%",
            icon: "/admin/overview/icon4.png",
        },
    ];

    // Show loading only if **all** endpoints are still loading
    const isLoading =
        loadingUsers && loadingRooms && loadingTournaments && loadingRevenue;

    if (isLoading)
        return <div className="text-white p-10">Loading dashboard...</div>;

    return (
        <div
            className="w-full xl:px-[72px] pt-[65px] bg-[#000] grid place-content-center"
            style={{
                background: "linear-gradient(to bottom, #000000, #202020)",
            }}
        >
            <HeadingSection
                heading="Dashboard Overview"
                subheading="Welcome Back! Here’s what’s happening in your gaming hub"
                btn1Content="Create Room"
                btn2Content="New Tournament"
                icon1={Plus}
                icon2={Anvil}
                component="overview"
            />

            <section className="h-auto w-full flex flex-wrap gap-10 mt-10">
                {CardData.map((item, index) => (
                    <Card key={index} {...item} component="overview" />
                ))}
            </section>

            <section className="h-auto w-full mt-10 flex flex-wrap justify-between">
                <Suspense
                    fallback={
                        <div className="text-white p-4">Loading chart...</div>
                    }
                >
                    <AnalyticsChart revenue={{ monthly: monthlyRevenue }} />
                </Suspense>
                <Suspense
                    fallback={
                        <div className="text-white p-4">
                            Loading activities...
                        </div>
                    }
                >
                    <RecentActivities />
                </Suspense>
            </section>
        </div>
    );
};

export default Overview;
