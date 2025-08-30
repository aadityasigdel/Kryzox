import { useState } from "react";
import { useLocation } from "react-router-dom";
import useUpdateData from "../../../hooks/updateData.js";

export default function RewardWinners() {
    const location = useLocation();
    const selectedUsers = location.state?.selectedUsers || [];
    const { updateData, loading, error } = useUpdateData();


    const [winnerData, setWinnerData] = useState(
        selectedUsers.reduce((acc, id) => {
            acc[id] = { position: "", message: "" };
            return acc;
        }, {})
    );

    const handleChange = (userId, field, value) => {
        setWinnerData((prev) => ({
            ...prev,
            [userId]: { ...prev[userId], [field]: value },
        }));
    };

    const handleSubmit = () => {
        const payload = Object.entries(winnerData).map(([userId, data]) => ({
            userId,
            ...data,
        }));

        console.log("Submitting:", payload);
        updateData("/api/v1/winners", payload);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 h-screen">
            <div className="border border-white/20 rounded-xl p-6 shadow-lg flex flex-col justify-start text-white bg-black/70">
                <h1 className="text-4xl font-bold bg-gradient-to-br from-teal-300 to-purple-500 bg-clip-text text-transparent mb-6">
                    Selected Users
                </h1>

                {selectedUsers.length === 0 ? (
                    <p className="text-gray-400">No users selected.</p>
                ) : (
                    <ul className="space-y-3">
                        {selectedUsers.map((id) => (
                            <li
                                key={id}
                                className="bg-white/5 border border-white/20 rounded-lg p-3 shadow-sm"
                            >
                                <span className="text-teal-300 font-semibold">
                                    User ID:
                                </span>{" "}
                                {id}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg text-white overflow-y-auto">
                <h2 className="text-4xl font-bold bg-gradient-to-br from-teal-300 to-purple-500 bg-clip-text text-transparent mb-6">
                    Reward Winners
                </h2>

                {selectedUsers.map((id) => (
                    <div
                        key={id}
                        className="mb-6 p-4 bg-black/40 border border-white/20 rounded-lg shadow space-y-4"
                    >
                        <h3 className="text-lg font-semibold text-teal-300">
                            User ID: {id}
                        </h3>

                        <input
                            type="text"
                            placeholder="Enter position"
                            value={winnerData[id]?.position || ""}
                            onChange={(e) =>
                                handleChange(id, "position", e.target.value)
                            }
                            className="w-full bg-black/60 text-white border border-white/30 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />

                        <input
                            type="text"
                            placeholder="Enter message"
                            value={winnerData[id]?.message || ""}
                            onChange={(e) =>
                                handleChange(id, "message", e.target.value)
                            }
                            className="w-full bg-black/60 text-white border border-white/30 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>
                ))}

                {selectedUsers.length > 0 && (
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="mt-4 bg-gradient-to-r from-teal-400 to-purple-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:opacity-90 transition"
                    >
                        {loading ? "Saving..." : "Save Winners"}
                    </button>
                )}

                {error && (
                    <p className="text-red-400 mt-4">Error: {error.message}</p>
                )}
            </div>
        </div>
    );
}
