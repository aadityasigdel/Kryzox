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
        <div className="w-full min-h-screen px-8 pt-12 bg-gradient-to-b from-black to-gray-900 flex flex-col gap-6">
            <HeadingSection
                heading="Room Details"
                subheading={`Room ID: ${roomId}`}
            />

            {/* ================= Full details card ================= */}
            <div className="bg-[#111] rounded-xl shadow-md p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Detail label="Room ID" value={room.roomId} />
                <Detail label="Status" value={room.status} />
                <Detail label="Game" value={room.game?.gameTitle} />
                <Detail label="Game Type" value={room.gameType} />
                <Detail
                    label="Created At"
                    value={new Date(room.createdAt).toLocaleString()}
                />
                <Detail label="Creator" value={room.user?.name} />
                <Detail label="Opponent" value={room.opponent?.name || "—"} />
                <Detail label="Entry Fee" value={`$${room.entryFee}`} />
                <Detail label="Prize" value={`$${room.wining}`} />
                <Detail label="Custom Message" value={room.customMsg || "—"} />
                <Detail label="Max Players" value={room.maxPlayers || "—"} />
                <Detail label="Room Type" value={room.roomType || "—"} />
            </div>
        </div>
    );
};

const Detail = ({ label, value }) => (
    <div className="flex justify-between items-center text-sm py-1.5 border-b border-gray-700 last:border-b-0">
        <span className="text-gray-400">{label}</span>
        <span className="text-white font-medium">{value}</span>
    </div>
);

export default RoomDetails;
