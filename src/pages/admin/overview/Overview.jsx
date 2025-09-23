"use client";
import { Anvil, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import useGetData from "../../../hooks/getData";
import Card from "../ui/shared/Card";
import HeadingSection from "../ui/shared/HeadingSection";
import "./style.css";
import AnalyticsChart from "./ui/Chart";
import RecentActivities from "./ui/RecentActivities";

const Overview = () => {
    const {
        getData: getUsers,
        result: users,
        loading: loadingUsers,
        responseError: errorUsers,
        statusCode: usersStatus,
    } = useGetData();

    const {
        getData: getRooms,
        result: rooms,
        loading: loadingRooms,
        responseError: errorRooms,
        statusCode: roomsStatus,
    } = useGetData();

    const {
        getData: getTournaments,
        result: tournaments,
        loading: loadingTournaments,
        responseError: errorTournaments,
        statusCode: tournamentsStatus,
    } = useGetData();

    const {
        getData: getRevenue,
        result: revenue,
        loading: loadingRevenue,
        responseError: errorRevenue,
        statusCode: revenueStatus,
    } = useGetData();

    const [totalUsers, setTotalUsers] = useState(0);
    const [activeRooms, setActiveRooms] = useState(0);
    const [totalTournaments, setTotalTournaments] = useState(0);
    const [monthlyRevenue, setMonthlyRevenue] = useState(0);

    useEffect(() => {
        getUsers("users/");
        getRooms("rooms/status?status=ALL_DONE");
        getTournaments("posts");
        getRevenue("revenue/monthly");
    }, [getUsers, getRooms, getTournaments, getRevenue]);

    useEffect(() => {
        if (users) setTotalUsers(Array.isArray(users) ? users.length : 0);
    }, [users]);

    useEffect(() => {
        if (rooms) setActiveRooms(Array.isArray(rooms) ? rooms.length : 0);
        console.log(rooms);
    }, [rooms]);

    useEffect(() => {
        if (tournaments)
            setTotalTournaments(
                Array.isArray(tournaments.content)
                    ? tournaments.content.length
                    : 0
            );
    }, [tournaments]);

    useEffect(() => {
        if (revenue)
            setMonthlyRevenue(
                Array.isArray(revenue) && revenue.length > 0
                    ? revenue[0].amount
                    : 0
            );
    }, [revenue]);

    // CARD DATA
    const CardData = [
        {
            gradientColor: { color1: "#B05BDB", color2: "#202020" },
            heading: "Total Users",
            totalData: totalUsers,
            totalPercentage: "+ 10%",
            icon: "/admin/overview/icon1.png",
        },
        {
            gradientColor: { color1: "#800080", color2: "#202020" },
            heading: "Completed Rooms",
            totalData: activeRooms,
            totalPercentage: "+ 8%",
            icon: "/admin/overview/icon2.png",
        },
        {
            gradientColor: { color1: "#BA55D3", color2: "#202020" },
            heading: "Tournaments",
            totalData: totalTournaments,
            totalPercentage: "+ 16%",
            icon: "/admin/overview/icon3.png",
        },
        {
            gradientColor: { color1: "#7400BB", color2: "#202020" },
            heading: "Monthly Revenue",
            totalData: `$${monthlyRevenue}`,
            totalPercentage: "+ 24%",
            icon: "/admin/overview/icon4.png",
        },
    ];

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
                <AnalyticsChart revenue={{ monthly: monthlyRevenue }} />
                <RecentActivities />
            </section>
        </div>
    );
};

export default Overview;
