"use client";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetData from "../../../../hooks/getData.js";
import RoomInfoGrid from "./RoomInfoGrid.jsx";
import WinnerImg from "./WinnerImg.jsx";

const RoomDetailReward = () => {
    const { roomId } = useParams();
    const nav = useNavigate(); // 
    const { getData, result, loading, responseError } = useGetData();
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        if (roomId) {
            getData(`roomApp/room/${roomId}/approvals?status=CREATOR_APPROVED`);
        }
    }, [roomId]);

    if (loading) return <p className="text-gray-400">Loading...</p>;
    if (responseError) return <p className="text-red-500">{responseError}</p>;
    if (!result || result.length === 0) return <p>No room data found.</p>;

    const { room, user: requestingUser, status: approvalStatus } = result[0];

    const players = [
        { id: room.user?.id, name: room.user?.name || "Creator" },
        { id: requestingUser?.id, name: requestingUser?.name || "Opponent" },
    ];

    return (
        <div className="p-6 bg-gradient-to-b from-[#1a1a1a] to-[#202020] text-white rounded-xl shadow-2xl space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#80FFDB]">
                    Room #{room.roomId}
                </h2>
                <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        approvalStatus === "PENDING"
                            ? "bg-yellow-600/20 text-yellow-400 border border-yellow-500/40"
                            : approvalStatus === "COMPLETED"
                            ? "bg-green-600/20 text-green-400 border border-green-500/40"
                            : "bg-gray-600/20 text-gray-400 border border-gray-500/40"
                    }`}
                >
                    {approvalStatus}
                </span>
            </div>

            {/* Room Info */}
            <RoomInfoGrid room={room} />

            {/* Screenshots */}
            <WinnerImg
                user={requestingUser}
                creator_SS={room.creator_SS || null}
                player_SS={room.player_SS || null}
            />

            {/* Winner Selection + Payment */}
            <div className="flex flex-col items-center gap-4">
                <div className="flex gap-4">
                    {players.map((player) => (
                        <button
                            key={player.id}
                            onClick={() => setSelectedUserId(player.id)}
                            className={`px-5 py-2 rounded-lg transition ${
                                selectedUserId === player.id
                                    ? "bg-gradient-to-r from-purple-500 to-teal-400 text-white border-2 border-white scale-105"
                                    : "bg-gray-700 hover:bg-gray-600"
                            }`}
                        >
                            {player.name}
                        </button>
                    ))}
                </div>

                <button
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-400 disabled:opacity-50"
                    onClick={() => {
                        console.log("Selected User ID:", selectedUserId);
                        nav(`/admin/room-management/room-payment/${roomId}/winner/${selectedUserId}`);
                    }}
                    disabled={!selectedUserId}
                >
                    Confirm Payment
                </button>
            </div>
        </div>
    );
};

export default RoomDetailReward;
