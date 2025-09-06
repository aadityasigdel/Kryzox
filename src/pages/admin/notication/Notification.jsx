import React from "react";
import useFirebaseMessaging from "./hooks/useFirebaseMessaging.js";
import { Bell, AlertCircle, ClipboardList, CheckCircle2 } from "lucide-react";

const Notification = () => {
    const { messages } = useFirebaseMessaging(true);

    const allMessages = messages || [];

    // Map type → icon
    const getIcon = (type) => {
        switch (type) {
            case "task":
                return <ClipboardList className="w-5 h-5 text-black" />;
            case "alert":
                return <AlertCircle className="w-5 h-5 text-black" />;
            default:
                return <Bell className="w-5 h-5 text-black" />;
        }
    };

    return (
        <div
            className="w-full px-[72px] pt-[65px] min-h-screen text-white"
            style={{
                background: "linear-gradient(to bottom, #000000, #202020)",
            }}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold bg-[linear-gradient(45deg,#80FFDB,#B05BDB)] bg-clip-text text-transparent">
                    Notification Center
                </h2>
                <button
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg 
                     bg-[#1c1c1c] border border-white/10 
                     hover:border-[#80FFDB]/40 hover:shadow-[0_0_10px_#80FFDB30] transition"
                >
                    <CheckCircle2 className="w-4 h-4 text-[#80FFDB]" />
                    Mark all as read
                </button>
            </div>

            {/* Small description */}
            <p className="text-gray-400 text-sm mb-8">
                Stay up to date with recent alerts, updates, and assigned tasks.
            </p>

            {/* Pinned Section */}
            <div className="mb-10">
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
                    System Notification
                </h3>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-[#222] to-[#2a2a2a] ">
                    <div className="p-3 rounded-lg bg-gradient-to-tr from-[#80FFDB] to-[#B05BDB] flex items-center justify-center shadow-md">
                        <AlertCircle className="w-5 h-5 text-black" />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-white italic">
                            Don’t forget to check for updates regularly.
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">
                            – Stay connected
                        </p>
                    </div>
                </div>
            </div>

            {/* Notifications List */}
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
                Recent
            </h3>
            <div className="grid grid-cols-1 gap-4">
                {allMessages.map((msg, idx) => (
                    <div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-xl relative overflow-hidden
                       bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a]
                       border border-white/10
                       hover:scale-[1.02]
                       transition-all duration-300"
                    >
                        {/* Icon */}
                        <div className="p-3 rounded-lg bg-gradient-to-tr from-[#80FFDB] to-[#B05BDB] flex items-center justify-center shadow-md">
                            {getIcon(msg.type)}
                        </div>

                        {/* Text Content */}
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-white leading-tight">
                                {msg.title}
                            </h3>
                            <p className="text-xs text-gray-400 line-clamp-2">
                                {msg.body}
                            </p>
                        </div>

                        {/* Timestamp */}
                        <span className="text-xs text-gray-500 whitespace-nowrap">
                            {msg.time}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notification;
