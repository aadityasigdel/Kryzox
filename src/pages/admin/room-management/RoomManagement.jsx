import { useEffect } from "react";
import useGetData from "../../../hooks/getData";
import HeadingSection from "../ui/shared/HeadingSection";
import "./style.css";
import Button from "./ui/Button";
import CompletedRoomCard from "./ui/CompletedRoomCard";
import RoomManagementCard from "./ui/RoomManagementCard";

const RoomManagement = () => {
    // RUNNING rooms
    const {
        getData: getRunningRooms,
        result: runningRooms,
        loading: loadingRunning,
        responseError: errorRunning,
        statusCode: runningStatus,
        errorCode: runningErrorCode,
    } = useGetData();

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
    }, []);

    useEffect(() => {
        console.log(
            "✅ Running Rooms:",
            runningRooms,
            "📡 Status:",
            runningStatus,
            "❌ ErrorCode:",
            runningErrorCode
        );
    }, [runningRooms, runningStatus, runningErrorCode]);

    useEffect(() => {
        console.log(
            "✅ Scheduled Rooms:",
            scheduledRooms,
            "📡 Status:",
            scheduledStatus,
            "❌ ErrorCode:",
            scheduledErrorCode
        );
    }, [scheduledRooms, scheduledStatus, scheduledErrorCode]);

    useEffect(() => {
        console.log(
            "✅ Completed Rooms:",
            completedRooms,
            "📡 Status:",
            completedStatus,
            "❌ ErrorCode:",
            completedErrorCode
        );
    }, [completedRooms, completedStatus, completedErrorCode]);

    const mapToCardData = (room) => [
        { left: "Room Name", right: room.status },
        { left: "User ID:", right: room.userId },
        { left: "Game:", right: room.gameName },
        { left: "Players:", right: room.players },
        { left: "Creator", right: room.creator },
        { left: "Entry Fee:", right: `$${room.entryFee}` },
        { left: "Prize:", right: `$${room.prize}` },
        {
            left: "/admin/room-management/setting.png",
            right: "/admin/room-management/trash.png",
        },
    ];

    const mapCompletedRoomLeft = (room) => [
        { left: "Room Name", right: room.status },
        { left: "User ID:", right: room.userId },
        { left: "Game:", right: room.gameName },
        { left: "Players:", right: room.players },
        { left: "Creator/player1", right: room.creator },
        { left: "Prize:", right: `$${room.prize}` },
        { left: "Time:", right: room.time || "—" },
    ];

    const mapCompletedRoomRight = (room) => [
        { left: "User ID:", right: room.opponentId },
        { left: "Game Name:", right: room.opponentName },
        { left: "Player2:", right: room.opponent },
        { left: "Prize:", right: `$${room.prize}` },
        { left: "Time:", right: room.time || "—" },
    ];

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

            {/* ================= RUNNING ROOMS ================= */}
            <div className="w-full">
                <div className="flex my-10 gap-5">
                    <img
                        src="/admin/room-management/star.png"
                        alt="star_image"
                    />
                    <h1 className="text-[22px] text-[#80FFDB]">
                        Running Rooms
                    </h1>
                </div>

             

                <div className="flex flex-wrap gap-6 justify-center md:justify-between">
                    {loadingRunning && (
                        <p className="text-gray-400 text-sm">
                            Loading running rooms...
                        </p>
                    )}
                    {errorRunning && (
                        <p className="text-red-500 text-sm">{errorRunning}</p>
                    )}

                    {runningRooms?.length > 0
                        ? runningRooms.map((room) => (
                              <RoomManagementCard
                                  key={room.id}
                                  cardData={mapToCardData(room)}
                              />
                          ))
                        : !loadingRunning && (
                              <p className="text-gray-400 text-sm">
                                  No running rooms
                              </p>
                          )}
                </div>
            </div>

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
                                  key={room.id}
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
                              <div key={room.id} className="flex gap-6">
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
                    <Button onclick={() => {}}> Select the Winner</Button>
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
                    <Button onclick={() => {}}> Confirm the payment</Button>
                </div>
            </div>
        </div>
    );
};

export default RoomManagement;
