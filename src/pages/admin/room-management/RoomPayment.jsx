"use client";
import { MessageSquare, Trophy, X } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import usePostData from "../../../hooks/postData";

const Payment = ({ onClose }) => {
    const [position, setPosition] = useState(1);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const { roomId, userId } = useParams();
    const { postData, loading: hookLoading } = usePostData();

    const handleSubmit = async () => {
        if (!userId || !roomId) return;

        setError(null);
        setSuccess(null);

        try {
            const payload = {
                userIds: [userId],
                position: parseFloat(position),
                message,
            };

            await postData(`/room/${roomId}/winners`, payload);

            setSuccess("✅ Winner submitted successfully!");
            setMessage("");
            setPosition(1);
        } catch (err) {
            setError(err.message || "Something went wrong");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="pointer-events-auto w-full max-w-md p-6 bg-[#1b1b1b] rounded-2xl shadow-2xl border border-gray-700 space-y-6 transform translate-x-16">
                {onClose && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                    >
                        <X className="w-5 h-5" />
                    </button>
                )}

                {/* Header */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                        <Trophy className="w-6 h-6 text-yellow-400" />
                        Confirm Winner
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                        Assign position & add a custom message
                    </p>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                            Position
                        </label>
                        <div className="flex items-center bg-[#2a2a2a] rounded-lg px-3">
                            <Trophy className="w-4 h-4 text-yellow-400 mr-2" />
                            <input
                                type="number"
                                step="0.1"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                className="w-full py-2 bg-transparent text-white outline-none placeholder-gray-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                            Message
                        </label>
                        <div className="flex items-center bg-[#2a2a2a] rounded-lg px-3">
                            <MessageSquare className="w-4 h-4 text-blue-400 mr-2" />
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full py-2 bg-transparent text-white outline-none placeholder-gray-500"
                                placeholder="Message..."
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    disabled={hookLoading || !userId || !roomId}
                    className="mt-6 w-full py-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl text-white font-semibold tracking-wide shadow-lg hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-40"
                >
                    {hookLoading ? "Submitting..." : "Submit Winner"}
                </button>

                {/* Status Messages */}
                {error && (
                    <p className="mt-4 text-center text-sm text-red-400 bg-red-900/40 py-2 rounded-md">
                        {error}
                    </p>
                )}
                {success && (
                    <p className="mt-4 text-center text-sm text-green-400 bg-green-900/30 py-2 rounded-md">
                        {success}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Payment;
