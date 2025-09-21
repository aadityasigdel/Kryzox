"use client";

const RoomInfoGrid = ({ room }) => {
    const {
        totalParticipant,
        entryFee,
        wining,
        gameType,
        round,
        game,
        addedDate,
        user,
    } = room;

    const formatDate = (dateArray) => {
        if (!dateArray) return "N/A";
        const [y, m, d, hh, mm] = dateArray;
        return new Date(y, m - 1, d, hh, mm).toLocaleString();
    };

    return (
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
                    <span className="font-bold">Game:</span> {game?.gameTitle}
                </p>
                <p>
                    <span className="font-bold">Creator:</span> {user?.name}
                </p>
            </div>
        </div>
    );
};

export default RoomInfoGrid;
