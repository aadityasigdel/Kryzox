import { useState } from "react";

export default function RewardUser() {
    const [screenshot, setScreenshot] = useState(null);
    const [playerId, setPlayerId] = useState("");
    const [coins, setCoins] = useState("");

    const [screenshots, setScreenshots] = useState([
        {
            id: 1,
            url: "https://via.placeholder.com/400x200?text=Screenshot+1",
            player: "Player One",
        },
        {
            id: 2,
            url: "https://via.placeholder.com/400x200?text=Screenshot+2",
            player: "Player Two",
        },
        {
            id: 3,
            url: "https://via.placeholder.com/400x200?text=Screenshot+3",
            player: "Player Three",
        },
    ]);

    const handleRewardSubmit = (e) => {
        e.preventDefault();
        if (!playerId || !coins)
            return alert("Enter player ID and coin amount");

        alert(`Rewarded ${coins} coins to player: ${playerId}`);
        setPlayerId("");
        setCoins("");
    };

    return (
        <div className="p-6 h-screen flex flex-col gap-8 text-white">
            {/* Screenshot Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {screenshots.map((shot) => (
                    <div
                        key={shot.id}
                        className="bg-gray-900/70 rounded-xl shadow-md overflow-hidden border border-gray-700 hover:scale-[1.02] transition"
                    >
                        <img
                            src={shot.url}
                            alt="Screenshot"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4 flex justify-between items-center">
                            <span className="text-purple-300 font-semibold">
                                {shot.player}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Reward Player */}
            <div className="bg-gray-900/50 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Reward a Player
                </h3>
                <form
                    onSubmit={handleRewardSubmit}
                    className="flex flex-col gap-3"
                >
                    <input
                        type="text"
                        placeholder="Enter Player ID"
                        value={playerId}
                        onChange={(e) => setPlayerId(e.target.value)}
                        className="px-3 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="number"
                        placeholder="Enter Coins"
                        value={coins}
                        onChange={(e) => setCoins(e.target.value)}
                        className="px-3 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-teal-400 hover:opacity-90 text-white font-semibold transition"
                    >
                        Reward Player
                    </button>
                </form>
            </div>
        </div>
    );
}
