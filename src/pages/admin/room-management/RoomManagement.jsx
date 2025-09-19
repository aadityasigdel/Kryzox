import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetData from "../../../hooks/getData";
import HeadingSection from "../ui/shared/HeadingSection";
import "./style.css";
import RoomManagementCard from "./ui/RoomManagementCard";

const RoomManagement = () => {
    const nav = useNavigate();
    const [activeTab, setActiveTab] = useState("scheduled");
    const [searchTerm, setSearchTerm] = useState("");

    // SCHEDULED rooms
    const {
        getData: getScheduledRooms,
        result: scheduledRooms = [],
        loading: loadingScheduled,
        responseError: errorScheduled,
    } = useGetData();

    // COMPLETED rooms
    const {
        getData: getCompletedRooms,
        result: completedRooms = [],
        loading: loadingCompleted,
        responseError: errorCompleted,
    } = useGetData();

    // COIN_TIME rooms
    const {
        getData: getCoinTime,
        result: coinTime = [],
        loading: loadingCoinTime,
        responseError: errorCoinTime,
    } = useGetData();

    useEffect(() => {
        getScheduledRooms("rooms/status?status=PENDING");
        getCompletedRooms("rooms/status?status=PRIVATE");
        getCoinTime("rooms/status?status=COIN_TIME");
    }, []);

    // ==================== MAPPERS ====================
    const mapScheduledCard = (room) => [
        { left: "Room ID", right: room.roomId },
        { left: "Status", right: room.status },
        { left: "Game", right: room.game?.gameTitle },
        { left: "Game Type", right: room.gameType },
        { left: "Creator", right: room.user?.name },
        { left: "Entry Fee", right: `$${room.entryFee}` },
        { left: "Prize", right: `$${room.wining}` },
        {
            left: "/admin/room-management/setting.png",
            right: "/admin/room-management/trash.png",
        },
    ];

    const mapCompletedCard = (room) => [
        { left: "Room ID", right: room.roomId },
        { left: "Creator", right: room.user?.name },
        { left: "Opponent", right: room.opponent?.name || "—" },
        { left: "Game", right: room.game?.gameTitle },
        { left: "Game Type", right: room.gameType },
        { left: "Prize", right: `$${room.wining}` },
        {
            left: "/admin/room-management/setting.png",
            right: "/admin/room-management/trash.png",
        },
    ];

    const mapCoinTimeCard = (coin) => [
        { left: "Room ID", right: coin.roomId },
        { left: "Creator", right: coin.user?.name },
        { left: "Opponent", right: coin.opponent?.name || "—" },
        { left: "Game", right: coin.game?.gameTitle },
        { left: "Game Type", right: coin.gameType },
        { left: "Prize", right: `$${coin.wining}` },
        {
            left: "/admin/room-management/setting.png",
            right: "/admin/room-management/trash.png",
        },
    ];

    // ==================== RENDER ====================
    return (
        <div
            className="w-full h-screen flex flex-col px-[72px] pt-[65px]"
            style={{
                background: "linear-gradient(to bottom, #000000, #202020)",
            }}
        >
            <HeadingSection
                heading="Room Management"
                subheading="Manage multiplayer gaming sessions and rooms and payment"
            />

            {/* Tabs Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between my-6 gap-4">
                <div className="flex items-center bg-[#111] px-4 py-2 rounded-md w-full sm:w-1/3 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search rooms..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-transparent text-white w-full outline-none mx-2"
                    />
                </div>
                <div className="flex gap-4">
                    <TabButton
                        isActive={activeTab === "scheduled"}
                        onClick={() => setActiveTab("scheduled")}
                    >
                        Scheduled
                    </TabButton>
                    <TabButton
                        isActive={activeTab === "completed"}
                        onClick={() => setActiveTab("completed")}
                    >
                        Completed
                    </TabButton>
                    <TabButton
                        isActive={activeTab === "coinTime"}
                        onClick={() => setActiveTab("coinTime")}
                    >
                        CoinTime
                    </TabButton>
                </div>
            </div>

            {/* Tabs Content */}
            <div className="flex-1 overflow-y-auto pb-6">
                {activeTab === "scheduled" && (
                    <Section
                        title="Scheduled Rooms"
                        icon="/admin/room-management/remainder.png"
                        loading={loadingScheduled}
                        error={errorScheduled}
                        emptyMessage="No scheduled rooms"
                        data={scheduledRooms}
                        mapper={mapScheduledCard}
                        searchTerm={searchTerm}
                        onClick={(room) => nav(`room-detail/${room.roomId}`)}
                    />
                )}

                {activeTab === "completed" && (
                    <Section
                        title="Completed Rooms"
                        icon="/admin/room-management/remainder.png"
                        loading={loadingCompleted}
                        error={errorCompleted}
                        emptyMessage="No completed rooms"
                        data={completedRooms}
                        mapper={mapCompletedCard}
                        searchTerm={searchTerm}
                    />
                )}

                {activeTab === "coinTime" && (
                    <Section
                        title="CoinTime"
                        icon="/admin/room-management/remainder.png"
                        loading={loadingCoinTime}
                        error={errorCoinTime}
                        emptyMessage="No coin transactions found"
                        data={coinTime}
                        mapper={mapCoinTimeCard}
                        searchTerm={searchTerm}
                        onClick={(room) => nav(`room-rewards/${room.roomId}`)}
                    />
                )}
            </div>
        </div>
    );
};

// ==================== REUSABLE SECTION ====================
const Section = ({
    title,
    icon,
    loading,
    error,
    emptyMessage,
    data,
    mapper,
    searchTerm,
    onClick,
}) => {
    const filtered = data.filter((item) => {
        const search = searchTerm.toLowerCase();
        return (
            item.roomId?.toString().includes(search) ||
            item.game?.gameTitle?.toLowerCase().includes(search) ||
            item.user?.name?.toLowerCase().includes(search) ||
            item.opponent?.name?.toLowerCase().includes(search)
        );
    });

    return (
        <div className="w-full">
            <div className="flex items-center my-4 gap-3">
                <img
                    src={icon}
                    alt={`${title}_icon`}
                    className="h-6 w-6 object-cover"
                />
                <h1 className="text-lg text-[#80FFDB] font-semibold">
                    {title}
                </h1>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {loading && (
                    <p className="text-gray-400 text-sm">
                        Loading {title.toLowerCase()}...
                    </p>
                )}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                {filtered.length > 0
                    ? filtered.map((item) => (
                          <RoomManagementCard
                              key={item.roomId || item.transactionId}
                              onClick={
                                  onClick ? () => onClick(item) : undefined
                              }
                              cardData={mapper(item)}
                          />
                      ))
                    : !loading && (
                          <p className="text-gray-400 text-sm">
                              {emptyMessage}
                          </p>
                      )}
            </div>
        </div>
    );
};

// ==================== TAB BUTTON ====================
const TabButton = ({ isActive, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded-md transition ${
            isActive
                ? "bg-[#80FFDB] text-black font-semibold"
                : "bg-[#222] text-gray-300 hover:bg-[#333]"
        }`}
    >
        {children}
    </button>
);

export default RoomManagement;
