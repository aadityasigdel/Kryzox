"use client";
import { useState } from "react";

const Payment = ({ roomId, selectedUserId }) => {
    const [position, setPosition] = useState(1); 
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async () => {
        if (!selectedUserId) return;

        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch(`/api/v1/rooms/${roomId}/winners`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userIds: [selectedUserId],
                    position: parseFloat(position),
                    message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            setSuccess("Winner submitted successfully!");
            console.log("Winner API response:", data);
        } catch (err) {
            setError(err.message);
            console.error("Winner API error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 bg-[#2a2a2a]/60 rounded-lg space-y-4">
            <h3 className="text-lg font-bold text-[#80FFDB]">Confirm Winner</h3>

            <div className="flex flex-col gap-2">
                <label>Position</label>
                <input
                    type="number"
                    step="0.1"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="px-2 py-1 rounded bg-[#1a1a1a] text-white"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label>Message</label>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="px-2 py-1 rounded bg-[#1a1a1a] text-white"
                    placeholder="head shot"
                />
            </div>

            <button
                onClick={handleSubmit}
                disabled={loading || !selectedUserId}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-400 rounded-lg text-white disabled:opacity-50"
            >
                {loading ? "Submitting..." : "Submit Winner"}
            </button>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-400">{success}</p>}
        </div>
    );
};

export default Payment;
