"use client";
import { useState } from "react";
import usePostData from "../../../../hooks/postData";

const StreamForm = ({ onAddStream }) => {
    const [formData, setFormData] = useState({
        videoLink: "",
        status: "UPCOMMING",
        startAt: "",
        gameId: "1",
    });

    const games = [
        { id: "1", name: "PUBG" },
        { id: "2", name: "Free Fire" },
        { id: "3", name: "BGMI" },
    ];

    const { postData, loading, responseError, statusCode } = usePostData();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newStream = {
            videoLink: formData.videoLink,
            status: formData.status,
            ...(formData.status === "UPCOMMING" && {
                startAt: formData.startAt,
            }),
        };

        onAddStream(newStream);

        setFormData({
            videoLink: "",
            status: "UPCOMMING",
            startAt: "",
            gameId: "1",
        });

        await postData(`/videos/game/${formData.gameId}`, newStream);
    };

    return (
        <div className="bg-gradient-to-b from-neutral-900 to-black p-6 rounded-xl text-white">
            <h2 className="text-xl font-bold text-green-300 mb-4">
                Add New Stream
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Video Link */}
                <input
                    type="text"
                    name="videoLink"
                    placeholder="Enter video link..."
                    value={formData.videoLink}
                    onChange={handleChange}
                    className="bg-black border border-purple-600 rounded-md px-3 py-2"
                    required
                />

                {/* Status */}
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="bg-black border border-purple-600 rounded-md px-3 py-2"
                >
                    <option value="UPCOMMING">UPCOMMING</option>
                    <option value="PUBLISHED">PUBLISHED</option>
                </select>

                {formData.status === "UPCOMMING" && (
                    <input
                        type="datetime-local"
                        name="startAt"
                        value={formData.startAt}
                        onChange={handleChange}
                        className="bg-black border border-purple-600 rounded-md px-3 py-2"
                        required
                    />
                )}

                {/* Game Selection */}
                <select
                    name="gameId"
                    value={formData.gameId}
                    onChange={handleChange}
                    className="bg-black border border-purple-600 rounded-md px-3 py-2"
                >
                    {games.map((game) => (
                        <option key={game.id} value={game.id}>
                            {game.name}
                        </option>
                    ))}
                </select>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 py-2 rounded-md font-semibold disabled:opacity-50"
                >
                    {loading ? "Submitting..." : "+ Submit Stream"}
                </button>

                {responseError && (
                    <p className="text-red-500 text-sm">{responseError}</p>
                )}
                {statusCode === 201 && (
                    <p className="text-green-400 text-sm">
                        Stream added successfully!
                    </p>
                )}
            </form>
        </div>
    );
};

export default StreamForm;
