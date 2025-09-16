import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetData from "../../../hooks/getData.js";
import Button from "../ui/shared/Button";
import HeadingSection from "../ui/shared/HeadingSection";
import CreateRoom from "./ui/CreateRoom";
import FullMapRoomsCard from "./ui/FullMapRoomCard";
import TabCard from "./ui/TabCard";

const cardData = [
    {
        gradientColor: { color1: "#B05BDB", color2: "#202020" },
        status: "Active",
        heading: "PUBG Mobile",
        rooms: "40 rooms",
        players: "1250 players",
    },
    {
        gradientColor: { color1: "#800080", color2: "#202020" },
        status: "Active",
        heading: "Free Fire",
        rooms: "23 rooms",
        players: "150 players",
    },
    {
        gradientColor: { color1: "#BA55D3", color2: "#202020" },
        status: "Active",
        heading: "BGMI",
        rooms: "23 rooms",
        players: "150 players",
    },
    {
        gradientColor: { color1: "#BA55D3", color2: "#202020" },
        status: "Active",
        heading: "LUDO",
        rooms: "23 rooms",
        players: "150 players",
    },
];

const TabNav = ["Scheduled", "Completed"];

const statusMap = {
    PENDING: "Scheduled",
    COMPLETED: "Completed",
};

const FullMapRooms = () => {
    const navi = useNavigate();
    const { getData, result, responseError, loading } = useGetData();
    const [openForm, setOpenForm] = useState(false);
    const [tournaments, setTournaments] = useState([]);
    const [selectedTab, setSelectedTab] = useState("Scheduled");

    useEffect(() => {
        setTournaments([]);

        let url = "/fullmaps/status/PENDING";
        if (selectedTab === "Completed") url = `/fullmaps/status/PRIVATE`;
        else if (selectedTab === "Scheduled") url = `/fullmaps/status/PENDING`;

        getData(url);
    }, [selectedTab]);

    // Map API results
    useEffect(() => {
        if (result?.content) {

            const apiTournaments = result.content.map((item) => ({
                fullmapId: item.fullmapId,
                title: item.title,
                content: item.content,
                game: { name: item.game?.gameTitle },
                map: { name: item.map?.mapTitle },
                mode: { name: item.gameMode?.modeName },
                maxplayer: item.maxplayer,
                pricePool: item.pricePool,
                roomId: item.roomId,
                roomPw: item.roomPw,
                startTime: item.startTime
                    ? new Date(item.startTime.join("-")).toLocaleString()
                    : "N/A",
                duration: item.duration,
                status:
                    selectedTab === "Completed"
                        ? "Completed"
                        : statusMap[item.status] || "Scheduled",
            }));


            setTournaments(apiTournaments);
        } else {
            setTournaments([]);
        }
    }, [result, selectedTab]);

    // Filter tournaments
    const filteredTournaments = tournaments.filter(
        (t) => t.status === selectedTab
    );


    const getTabCardData = (tournament) => [
        { left: "Title:", right: tournament.title },
        { left: "Game:", right: tournament.game?.name || "N/A" },
        { left: "Map:", right: tournament.map?.name || "N/A" },
        { left: "Mode:", right: tournament.mode?.name || "N/A" },
        { left: "Max Players:", right: tournament.maxplayer },
        { left: "Prize Pool:", right: `$${tournament.pricePool}` },
        { left: "Start Time:", right: tournament.startTime },
        { left: "/admin/full-map-rooms/setting.png", right: "View Details" },
    ];

    return (
        <section
            className="w-full px-[72px] pt-[65px]"
            style={{
                background: "linear-gradient(to bottom, #000000, #202020)",
            }}
        >
            <HeadingSection
                heading="Full Map Rooms"
                subheading="Manage multiplayer gaming sessions and tournaments"
                btn1Content="Create Room"
                onBtn1Click={() => setOpenForm(true)}
                icon1={Plus}
            />

            {/*  cards */}
            <div className="flex gap-10 mt-10">
                {cardData.map((item, idx) => (
                    <FullMapRoomsCard
                        key={idx}
                        gradientColor={item.gradientColor}
                        status={item.status}
                        heading={item.heading}
                        rooms={item.rooms}
                        players={item.players}
                    />
                ))}
            </div>

            {/*  tournament */}
            <div
                className="h-max w-full mt-10 p-[30px]"
                style={{
                    background: "linear-gradient(to bottom, #000000, #202020)",
                }}
            >
                {/* Tabs */}
                <div className="flex gap-10 mb-10">
                    {TabNav.map((item, index) => (
                        <div key={index} onClick={() => setSelectedTab(item)}>
                            {selectedTab === item ? (
                                <Button>{item}</Button>
                            ) : (
                                <span className="cursor-pointer text-gray-400 hover:text-white">
                                    {item}
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Loading/Error */}
                {loading && (
                    <p className="text-white">Loading tournaments...</p>
                )}
                {responseError && (
                    <p className="text-red-500">{responseError}</p>
                )}

                {/* Tournament cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto h-[500px]">
                    {filteredTournaments.length === 0 && !loading ? (
                        <p className="text-white">
                            No {selectedTab.toLowerCase()} tournaments found.
                        </p>
                    ) : (
                        filteredTournaments.map((tournament) => (
                            <div
                                key={tournament.fullmapId}
                                className="cursor-pointer hover:scale-105 mt-4 ml-4 transition-transform"
                                onClick={() => {
                                    if (tournament.status === "Scheduled") {
                                        navi(
                                            `approvals/${tournament.fullmapId}`
                                        );
                                    } else if (
                                        tournament.status === "Completed"
                                    ) {
                                        navi(
                                            `results/${tournament.fullmapId}`
                                        );
                                    }
                                }}
                            >
                                <TabCard
                                    TabCardData={getTabCardData(tournament)}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Create Room Modal */}
            <CreateRoom open={openForm} setOpen={setOpenForm} />
        </section>
    );
};

export default FullMapRooms;
