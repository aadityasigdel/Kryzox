"use client";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetData from "../../../../hooks/getData.js";
import WinnerImg from "./WinnerImg.jsx";

const RoomDetails = () => {
    const { roomId } = useParams();
    const { getData, result, loading, responseError } = useGetData();

    useEffect(() => {
        if (roomId) {
            getData(`rooms/${roomId}`);
        }
    }, [roomId]);

    if (loading) return <p className="text-gray-400">Loading...</p>;
    if (responseError) return <p className="text-red-500">{responseError}</p>;
    if (!result || !result.roomId) return <p>No room data found.</p>;

    const {
        totalParticipant,
        entryFee,
        wining,
        gameType,
        status,
        round,
        game,
        user,
        addedDate,
        creator_SS,
        player_SS,
    } = result;

    // Format date nicely
    const formatDate = (dateArray) => {
        if (!dateArray) return "N/A";
        const [y, m, d, hh, mm] = dateArray;
        return new Date(y, m - 1, d, hh, mm).toLocaleString();
    };

    return (
        <div className="p-6 bg-gradient-to-b from-[#1a1a1a] to-[#202020] text-white rounded-xl shadow-2xl space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#80FFDB]">
                    Room #{result.roomId}
                </h2>
                <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        status === "PENDING"
                            ? "bg-yellow-600/20 text-yellow-400 border border-yellow-500/40"
                            : status === "COMPLETED"
                            ? "bg-green-600/20 text-green-400 border border-green-500/40"
                            : "bg-gray-600/20 text-gray-400 border border-gray-500/40"
                    }`}
                >
                    {status}
                </span>
            </div>

            {/* Info Grid */}
            <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-[#2a2a2a]/60 p-4 rounded-lg">
                    <p>
                        <span className="font-bold">Game Type:</span> {gameType}
                    </p>
                    <p>
                        <span className="font-bold">Round:</span> {round}
                    </p>
                    <p>
                        <span className="font-bold">Players:</span>{" "}
                        {totalParticipant}
                    </p>
                    <p>
                        <span className="font-bold">Date:</span>{" "}
                        {formatDate(addedDate)}
                    </p>
                </div>
                <div className="bg-[#2a2a2a]/60 p-4 rounded-lg">
                    <p>
                        <span className="font-bold">Entry Fee:</span>{" "}
                        <span className="text-yellow-400">${entryFee}</span>
                    </p>
                    <p>
                        <span className="font-bold">Winning:</span>{" "}
                        <span className="text-green-400">${wining}</span>
                    </p>
                    <p>
                        <span className="font-bold">Game:</span>{" "}
                        {game?.gameTitle}
                    </p>
                    <p>
                        <span className="font-bold">Creator:</span> {user?.name}
                    </p>
                </div>
            </div>

            <WinnerImg
                user={user}
                creator_SS={creator_SS || null}
                player_SS={player_SS || null}
            />

            {/* Actions */}
            <div className="flex flex-col items-center gap-4">
                <div className="flex gap-4">
                    <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-teal-400">
                        Player1
                    </button>
                    <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-teal-400">
                        Player2
                    </button>
                </div>
                <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-400">
                    Confirm Payment
                </button>
            </div>
        </div>
    );
};

export default RoomDetails;
