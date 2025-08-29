import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetData from "../../../../hooks/getData.js";
import NumberofApproved from "./NumberofApproved.jsx";
import Complete from "./Compete.jsx";
const formatDate = (dateArr) => {
    if (!dateArr) return "N/A";
    const [year, month, day, hour, minute] = dateArr;
    return `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")} ${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
};

const TournamentCard = ({ tournament }) => (
    <div className="flex-1 bg-gray-900/80  rounded-xl shadow-md p-5 flex flex-col justify-between gap-4 max-h-full">
        <div className="flex justify-between items-start mb-3">
            <h2 className="text-teal-300 font-bold text-lg truncate">
                {tournament.title}
            </h2>
            <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    tournament.status === "PENDING"
                        ? "bg-yellow-500 text-black"
                        : tournament.status === "APPROVED"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                }`}
            >
                {tournament.status}
            </span>
        </div>

        <div className="text-sm flex flex-col gap-1 text-gray-300">
            <p>
                <span className="text-purple-400 font-semibold">Room ID:</span>{" "}
                {tournament.roomId || "N/A"}
            </p>
            <p>
                <span className="text-purple-400 font-semibold">Game:</span>{" "}
                {tournament.game?.gameTitle || "N/A"}
            </p>
            <p>
                <span className="text-purple-400 font-semibold">Players:</span>{" "}
                {tournament.gameMode?.modeName || "N/A"}
            </p>
            <p>
                <span className="text-purple-400 font-semibold">Creator:</span>{" "}
                {tournament.user?.name || "N/A"}
            </p>
            <p>
                <span className="text-purple-400 font-semibold">
                    Entry Fee:
                </span>{" "}
                ${tournament.entryFee || 0}
            </p>
            <p>
                <span className="text-purple-400 font-semibold">Prize:</span> $
                {tournament.pricePool || 0}
            </p>
            <p>
                <span className="text-purple-400 font-semibold">Date:</span>{" "}
                {formatDate(tournament.addedDate)}
            </p>
            <p>
                <span className="text-purple-400 font-semibold">
                    Total Players:
                </span>{" "}
                <NumberofApproved />/{tournament.maxplayer}
            </p>
        </div>
         {tournament.status === "PENDING" && (
            <Complete tournament={tournament} />
        )}
    </div>
);

const FullMapDetails = () => {
    const { fullmapId } = useParams();

    const {
        getData,
        result: fullMapData,
        loading,
        responseError,
    } = useGetData();

    useEffect(() => {
        getData(`fullmaps/${fullmapId}`);
    }, []);

    if (loading)
        return (
            <p className="text-white text-center mt-10">
                Loading tournaments...
            </p>
        );
    if (responseError)
        return (
            <p className="text-red-500 text-center mt-10">{responseError}</p>
        );
    if (!fullMapData)
        return (
            <p className="text-white text-center mt-10">No data available</p>
        );

    const tournaments = Array.isArray(fullMapData)
        ? fullMapData
        : [fullMapData];

    return (
        <div className="p-6 h-full">
            <h1 className="text-3xl font-bold mb-6 text-white">
                Full Map Details
            </h1>
            <div className="flex items-start h-full">
                {tournaments.map((tournament) => (
                    <TournamentCard
                        key={tournament.fullmapId}
                        tournament={tournament}
                    />
                ))}
            </div>
        </div>
    );
};

export default FullMapDetails;
