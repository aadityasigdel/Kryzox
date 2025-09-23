import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetData from "../../../hooks/getData";
import HeadingSection from "../ui/shared/HeadingSection";

const RoomDetails = () => {
    const { roomId } = useParams();
    const {
        getData: getRoomDetails,
        result: room,
        loading,
        responseError,
    } = useGetData();

    useEffect(() => {
        if (roomId) getRoomDetails(`rooms/${roomId}`);
    }, [roomId]);

    const formatDate = (dateArray) => {
        if (!dateArray) return "N/A";
        const [y, m, d, hh, mm] = dateArray;
        return new Date(y, m - 1, d, hh, mm).toLocaleString();
    };

    if (loading)
        return <p className="text-gray-400 p-4">Loading room details...</p>;
    if (responseError)
        return (
            <p className="text-red-500 p-4">
                Failed to load room: {responseError}
            </p>
        );
    if (!room) return <p className="text-gray-400 p-4">No room found.</p>;

    return (
        <div className="w-full min-h-screen px-6 md:px-12 pt-12 bg-gradient-to-b from-black to-gray-900 flex flex-col gap-8">
            <HeadingSection
                heading="Room Details"
                subheading={`Room ID: ${roomId}`}
            />

            {/* Modern Card Layout */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 p-8 space-y-8">
                {/* Status + Meta */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        {room.game?.gameTitle}{" "}
                        <span className="text-sm font-normal text-gray-400">
                            ({room.gameType})
                        </span>
                    </h2>
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            room.status === "ALL_DONE"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-yellow-500/20 text-yellow-400"
                        }`}
                    >
                        {room.status}
                    </span>
                </div>

                {/* Info Sections */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Game Info */}
                    <div>
                        <h3 className="text-gray-300 text-sm font-semibold mb-3">
                            Game Info
                        </h3>
                        <div className="space-y-2">
                            <Detail label="Round" value={room.round} />
                            <Detail
                                label="Players"
                                value={room.totalParticipant}
                            />
                            <Detail
                                label="Created At"
                                value={formatDate(room.addedDate)}
                            />
                            <Detail label="Creator" value={room.user?.name} />
                        </div>
                    </div>

                    {/* Rewards & Entry */}
                    <div>
                        <h3 className="text-gray-300 text-sm font-semibold mb-3">
                            Rewards & Entry
                        </h3>
                        <div className="space-y-2">
                            <Detail
                                label="Entry Fee"
                                value={
                                    <span className="text-yellow-400">
                                        ${room.entryFee}
                                    </span>
                                }
                            />
                            <Detail
                                label="Prize"
                                value={
                                    <span className="text-green-400">
                                        ${room.wining}
                                    </span>
                                }
                            />
                        </div>
                    </div>

                    {/* Access Info */}
                    <div>
                        <h3 className="text-gray-300 text-sm font-semibold mb-3">
                            Access Info
                        </h3>
                        <div className="space-y-2">
                            <Detail label="Game ID" value={room.gameID} />
                            <Detail label="Password" value={room.gamePw} />
                            <Detail
                                label="Modes"
                                value={
                                    <div className="flex gap-2">
                                        {room.tpp && (
                                            <span className="px-2 py-0.5 text-xs rounded bg-blue-500/20 text-blue-300">
                                                TPP
                                            </span>
                                        )}
                                        {room.fpp && (
                                            <span className="px-2 py-0.5 text-xs rounded bg-purple-500/20 text-purple-300">
                                                FPP
                                            </span>
                                        )}
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Detail = ({ label, value }) => (
    <div className="flex justify-between items-center text-sm py-1.5 border-b border-white/5">
        <span className="text-gray-400">{label}</span>w
        <span className="text-white font-medium">{value}</span>
    </div>
);

export default RoomDetails;
