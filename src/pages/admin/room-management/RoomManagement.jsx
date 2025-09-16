import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetData from "../../../hooks/getData";
import HeadingSection from "../ui/shared/HeadingSection";
import "./style.css";
import Button from "./ui/Button";
import CompletedRoomCard from "./ui/CompletedRoomCard";
import RoomManagementCard from "./ui/RoomManagementCard";

const RoomManagement = () => {

    const nav = useNavigate();
    // SCHEDULED rooms
    const {
        getData: getScheduledRooms,
        result: scheduledRooms,
        loading: loadingScheduled,
        responseError: errorScheduled,
        statusCode: scheduledStatus,
        errorCode: scheduledErrorCode,
    } = useGetData();

    // COMPLETED rooms
    const {
        getData: getCompletedRooms,
        result: completedRooms,
        loading: loadingCompleted,
        responseError: errorCompleted,
        statusCode: completedStatus,
        errorCode: completedErrorCode,
    } = useGetData();


    useEffect(() => {
        getScheduledRooms("rooms/status?status=PENDING");
        getCompletedRooms("rooms/status?status=PRIVATE");
    }, []);

    // Debug logs
    useEffect(() => {
        console.log("✅ Scheduled Rooms:", scheduledRooms);
    }, [scheduledRooms]);

    useEffect(() => {
        console.log("✅ Completed Rooms:", completedRooms);
    }, [completedRooms]);

    // Helper to format addedDate
    const formatDate = (arr) => {
        if (!Array.isArray(arr)) return "—";
        const [y, m, d, h, min, s] = arr;
        return new Date(y, m - 1, d, h, min, s).toLocaleString();
    };

    // ==================== MAPPERS ====================

    const mapToCardData = (room) => [
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

    const mapCompletedRoomLeft = (room) => [
        { left: "Room ID", right: room.roomId },
        { left: "Creator/Player1", right: room.user?.name },
        { left: "Game", right: room.game?.gameTitle },
        { left: "Game Type", right: room.gameType },
        { left: "Prize", right: `$${room.wining}` },
        { left: "Time", right: formatDate(room.addedDate) },
    ];

    const mapCompletedRoomRight = (room) => [
        { left: "Player2", right: "—" },
        { left: "Game", right: room.game?.gameTitle },
        { left: "Game Type", right: room.gameType },
        { left: "Prize", right: `$${room.wining}` },
        { left: "Time", right: formatDate(room.addedDate) },
    ];

    // ==================== RENDER ====================

    return (
        <div
            className="w-full px-[72px] pt-[65px]"
            style={{
                background: "linear-gradient(to bottom, #000000, #202020)",
            }}
        >
            <HeadingSection
                heading="Room Management"
                subheading="Manage multiplayer gaming sessions and rooms and payment"
            />

            {/* ================= SCHEDULED ROOMS ================= */}
            <div className="w-full">
                <div className="flex my-10 items-center gap-5">
                    <img
                        src="/admin/room-management/remainder.png"
                        alt="schedule_icon"
                        className="h-6 w-6 object-cover"
                    />
                    <h1 className="text-[22px] text-[#80FFDB]">
                        Scheduled Rooms
                    </h1>
                </div>

                <div className="flex flex-wrap gap-6 justify-center md:justify-between">
                    {loadingScheduled && (
                        <p className="text-gray-400 text-sm">
                            Loading scheduled rooms...
                        </p>
                    )}
                    {errorScheduled && (
                        <p className="text-red-500 text-sm">{errorScheduled}</p>
                    )}

                    {scheduledRooms?.length > 0
                        ? scheduledRooms.map((room) => (
                              <RoomManagementCard
                                  key={room.roomId}
                                   onClick={() => {nav(`room-rewards/${room.roomId}`)}}
                                  cardData={mapToCardData(room)}
                              />
                          ))
                        : !loadingScheduled && (
                              <p className="text-gray-400 text-sm">
                                  No scheduled rooms
                              </p>
                          )}
                </div>
            </div>

            {/* ================= COMPLETED ROOMS ================= */}
            <div className="w-full">
                <div className="flex items-center my-10 gap-5">
                    <img
                        src="/admin/room-management/remainder.png"
                        alt="completed_icon"
                        className="h-6 w-6 object-cover"
                    />
                    <h1 className="text-[22px] text-[#80FFDB]">
                        Completed Rooms
                    </h1>
                </div>

                <div className="flex flex-wrap gap-6 justify-center md:justify-between">
                    {loadingCompleted && (
                        <p className="text-gray-400 text-sm">
                            Loading completed rooms...
                        </p>
                    )}
                    {errorCompleted && (
                        <p className="text-red-500 text-sm">{errorCompleted}</p>
                    )}

                    {completedRooms?.length > 0
                        ? completedRooms.map((room) => (
                              <div key={room.roomId} className="flex gap-6">
                                  <CompletedRoomCard
                                      cardData={mapCompletedRoomLeft(room)}
                                      completedRoomValidator="left"
                                  />
                                  <CompletedRoomCard
                                      cardData={mapCompletedRoomRight(room)}
                                      completedRoomValidator="right"
                                  />
                              </div>
                          ))
                        : !loadingCompleted && (
                              <p className="text-gray-400 text-sm">
                                  No completed rooms
                              </p>
                          )}
                </div>

                {/* victory images + buttons */}
                <div className="w-full flex justify-between mt-10">
                    <img
                        src="/admin/room-management/victory.png"
                        className="w-full"
                        alt="victory"
                    />
                    <img
                        src="/admin/room-management/victory.png"
                        className="w-full"
                        alt="victory"
                    />
                </div>

                <div className="flex justify-center my-10">
                    <Button onClick={() => {}}> Select the Winner</Button>
                </div>

                <div className="h-auto w-full flex justify-between">
                    <div className="ml-[108px]">
                        <span className="text-[22px] font-semibold text-[#B05BDB]">
                            Creator/player1
                        </span>
                    </div>
                    <div className="mr-[108px]">
                        <span className="text-[22px] font-semibold text-[#B05BDB]">
                            Player2
                        </span>
                    </div>
                </div>

                <div className="flex justify-center mt-10 pb-10">
                    <Button onClick={() => {}}> Confirm the payment</Button>
                </div>
            </div>
        </div>
    );
};

export default RoomManagement;
