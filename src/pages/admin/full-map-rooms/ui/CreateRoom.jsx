import { useState } from "react";
import usePostData from "../../../../hooks/postData.js";
import Button from "../../ui/shared/Button";

// Available games
const games = [
    { id: 1, name: "PUBG Mobile" },
    { id: 2, name: "Free Fire" },
];

// Maps per game
const gameMaps = {
    1: [
        { mapId: 1, mapTitle: "Erangel" },
        { mapId: 2, mapTitle: "Miramar" },
        { mapId: 3, mapTitle: "Sanhok" },
        { mapId: 4, mapTitle: "Vikendi" },
        { mapId: 5, mapTitle: "Livik" },
        { mapId: 6, mapTitle: "Karakin" },
    ],
    2: [
        { mapId: 7, mapTitle: "Bermuda" },
        { mapId: 8, mapTitle: "Purgatory" },
        { mapId: 9, mapTitle: "Kalahari" },
    ],
};

// Game modes
const modes = [
    { id: 1, name: "Solo" },
    { id: 2, name: "Squad" },
];

// Default form values
const defaultForm = {
    title: "",
    content: "",
    entryFee: "",
    startTime: "",
    duration: "",
    pricePool: "",
    maxplayer: "",
    roomId: "",
    roomPw: "",
};

// Required fields
const requiredFields = [
    "title",
    "content",
    "entryFee",
    "startTime",
    "duration",
    "pricePool",
    "maxplayer",
    "roomId",
    "roomPw",
];

const CreateFullMapRoom = ({ open, setOpen, onCreate }) => {
    const [formData, setFormData] = useState(defaultForm);
    const [selectedGameId, setSelectedGameId] = useState("");
    const [selectedModeId, setSelectedModeId] = useState("");
    const [selectedMapId, setSelectedMapId] = useState("");
    const [feedback, setFeedback] = useState({ type: "", message: "" });

    const { postData, loading, responseError, statusCode } = usePostData();

    if (!open) return null;

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
        setFeedback({ type: "", message: "" });
    };

    const handleSubmit = async () => {
        // Validate required fields
        for (let field of requiredFields) {
            if (!formData[field]) {
                setFeedback({ type: "error", message: `Please fill ${field}` });
                return;
            }
        }

        if (!selectedGameId || !selectedModeId || !selectedMapId) {
            setFeedback({
                type: "error",
                message: "Please select Game, Mode & Map",
            });
            return;
        }

        // Extract selected values
        const selectedGame = games.find(
            (g) => g.id === Number(selectedGameId)
        ).name;

        const selectedMode = modes.find(
            (m) => m.id === Number(selectedModeId)
        ).name;

        const selectedMap = gameMaps[selectedGameId].find(
            (m) => m.mapId === Number(selectedMapId)
        ).mapTitle;

        try {
            // Save locally
            const saved = JSON.parse(
                localStorage.getItem("tournaments") || "[]"
            );
            saved.push({
                ...formData,
                game: selectedGame,
                mode: selectedMode,
                map: selectedMap,
            });
            localStorage.setItem("tournaments", JSON.stringify(saved));

            // Post to API
            await postData(
                `/user/1/game/${selectedGameId}/gamemode/${selectedModeId}/map/${selectedMapId}/fullmaps`,
                formData
            );

            if (onCreate) onCreate(formData);

            // Reset form
            setFormData(defaultForm);
            setSelectedGameId("");
            setSelectedModeId("");
            setSelectedMapId("");

            setFeedback({
                type: "success",
                message: "Room created successfully!",
            });
            setTimeout(() => setOpen(false), 1000);
        } catch (error) {
            setFeedback({ type: "error", message: "Failed to create room." });
        }
    };

    const inputClass =
        "w-full p-3 rounded-lg bg-[#1c1c1c] border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-[#B05BDB] placeholder:text-gray-400";

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70 backdrop-blur-sm">
            <div className="w-[650px] max-h-[90vh] p-6 rounded-2xl bg-[#111] text-white overflow-y-auto shadow-lg">
                <h2 className="text-2xl font-bold mb-2 text-[#B05BDB] flex items-center gap-2">
                    🎮 Create Full Map Match
                </h2>
                <p className="text-gray-400 mb-6">
                    Set up a custom gaming room with all the details for your
                    match or tournament.
                </p>

                {/* Basic Info */}
                <div className="mb-6">
                    <h3 className="text-[#80FFDB] font-semibold mb-3 flex items-center gap-2">
                        🛠 Basic Information
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Title *"
                            value={formData.title}
                            onChange={handleChange("title")}
                            className={inputClass}
                        />
                        <input
                            type="text"
                            placeholder="Room ID *"
                            value={formData.roomId}
                            onChange={handleChange("roomId")}
                            className={inputClass}
                        />
                        <input
                            type="text"
                            placeholder="Room Password *"
                            value={formData.roomPw}
                            onChange={handleChange("roomPw")}
                            className={inputClass}
                        />
                        <input
                            type="number"
                            placeholder="Max Players *"
                            value={formData.maxplayer}
                            onChange={handleChange("maxplayer")}
                            className={inputClass}
                        />
                        <input
                            type="number"
                            placeholder="Entry fee ($) *"
                            value={formData.entryFee}
                            onChange={handleChange("entryFee")}
                            className={inputClass}
                        />
                        <input
                            type="number"
                            placeholder="Prize Pool ($) *"
                            value={formData.pricePool}
                            onChange={handleChange("pricePool")}
                            className={inputClass}
                        />
                    </div>
                </div>

                {/* Game Settings */}
                <div className="mb-6">
                    <h3 className="text-[#80FFDB] font-semibold mb-3 flex items-center gap-2">
                        🎮 Game Settings
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <select
                            value={selectedGameId}
                            onChange={(e) => setSelectedGameId(e.target.value)}
                            className={inputClass}
                        >
                            <option value="">Select a game *</option>
                            {games.map((g) => (
                                <option key={g.id} value={g.id}>
                                    {g.name}
                                </option>
                            ))}
                        </select>

                        <select
                            value={selectedModeId}
                            onChange={(e) => setSelectedModeId(e.target.value)}
                            className={inputClass}
                        >
                            <option value="">Select mode *</option>
                            {modes.map((m) => (
                                <option key={m.id} value={m.id}>
                                    {m.name}
                                </option>
                            ))}
                        </select>

                        <select
                            value={selectedMapId}
                            onChange={(e) => setSelectedMapId(e.target.value)}
                            className={inputClass}
                            disabled={!selectedGameId}
                        >
                            <option value="">
                                {selectedGameId
                                    ? "Select map *"
                                    : "Choose game first"}
                            </option>
                            {selectedGameId &&
                                gameMaps[selectedGameId].map((m) => (
                                    <option key={m.mapId} value={m.mapId}>
                                        {m.mapTitle}
                                    </option>
                                ))}
                        </select>

                        <input
                            type="number"
                            placeholder="Duration (minutes) *"
                            value={formData.duration}
                            onChange={handleChange("duration")}
                            className={inputClass}
                        />
                        <input
                            type="datetime-local"
                            value={formData.startTime}
                            onChange={handleChange("startTime")}
                            className={inputClass}
                        />
                        <textarea
                            placeholder="Custom Rules *"
                            value={formData.content}
                            onChange={handleChange("content")}
                            className={inputClass + " col-span-2 h-24"}
                        />
                    </div>
                </div>

                {/* Buttons & Feedback */}
                <div className="flex flex-col gap-3">
                    <div className="flex justify-end gap-4">
                        <Button func={() => setOpen(false)}>Cancel</Button>
                        <Button func={handleSubmit} disabled={loading}>
                            {loading ? "Creating..." : "+ Create Room"}
                        </Button>
                    </div>
                    {feedback.message && (
                        <p
                            className={`text-sm ${
                                feedback.type === "error"
                                    ? "text-red-400"
                                    : "text-green-400"
                            }`}
                        >
                            {feedback.message}
                        </p>
                    )}
                    {responseError && (
                        <p className="text-sm text-red-400">{responseError}</p>
                    )}
                    {statusCode && (
                        <p className="text-sm text-gray-400">
                            Status: {statusCode}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreateFullMapRoom;
