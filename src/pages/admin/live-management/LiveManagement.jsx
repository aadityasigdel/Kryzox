"use client";
import { useState } from "react";
import LiveStreams from "./ui/LiveStream";
import StreamForm from "./ui/StreamForm";

const LiveManagement = () => {
    const [activeTab, setActiveTab] = useState("All Streams");
    const [streams, setStreams] = useState([

    ]);

    const handleAddStream = (newStream) => {
        setStreams([...streams, newStream]);
    };

    return (
        <div className="min-h-screen bg-black text-white p-10 flex gap-8">
            {/* Left Section */}
            <LiveStreams
                streams={streams}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {/* Right Section */}
            <div className="w-1/3">
                <StreamForm onAddStream={handleAddStream} />
            </div>
        </div>
    );
};

export default LiveManagement;
