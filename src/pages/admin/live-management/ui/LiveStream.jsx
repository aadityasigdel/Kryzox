"use client";
import { useEffect, useState } from "react";
import useGetData from "../../../../hooks/getData";

const LiveStreams = ({ activeTab, setActiveTab }) => {
    const tabs = ["All Streams", "Live", "UPCOMMING", ];
    const [streams, setStreams] = useState([]);
    const { getData, result, responseError, loading } = useGetData();

    useEffect(() => {
        getData("/videos/");
    }, []);

    useEffect(() => {
        if (result && Array.isArray(result.content)) {
            const mappedStreams = result.content.map((item) => ({
                title: item.game.gameTitle,
                status: item.status === "PUBLISHED" ? "Live" : item.status,
                videoLink: item.videoLink,
                startAt: item.startAt,
                createdAt: item.createdAt,
            }));
            setStreams(mappedStreams);
        }
    }, [result]);

    const filteredStreams =
        activeTab === "All Streams"
            ? streams
            : streams.filter((s) => s.status === activeTab);

    const getStatusClasses = (status) => {
        switch (status) {
            case "Live":
                return "bg-red-900 text-red-400";
            case "Scheduled":
                return "bg-yellow-900 text-yellow-400";
            case "Ended":
                return "bg-gray-700 text-gray-300";
            default:
                return "bg-gray-800 text-gray-400";
        }
    };

    return (
        <div className="w-2/3 bg-gradient-to-b from-neutral-900 to-black p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-green-300">Live Streams</h2>
            <p className="text-purple-400 mb-4">
                Monitor all active and scheduled streams
            </p>

            <div className="flex gap-3 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 rounded-md ${
                            activeTab === tab ? "bg-gray-700" : "bg-gray-800"
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {loading ? (
                <p className="text-gray-400">Loading streams...</p>
            ) : responseError ? (
                <p className="text-red-500">{responseError}</p>
            ) : filteredStreams.length === 0 ? (
                <p className="text-gray-400">No streams available.</p>
            ) : (
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-400 border-b border-gray-700">
                            <th className="py-2">Stream</th>
                            <th>video Link</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStreams.map((stream, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-800"
                            >
                                <td className="py-3">{stream.title}</td>
                                <td>{stream.videoLink} </td>
                                <td>
                                    <span
                                        className={`px-3 py-1 rounded-md text-sm ${getStatusClasses(
                                            stream.status
                                        )}`}
                                    >
                                        {stream.status === "Live"
                                            ? "🔴 Live"
                                            : stream.status}
                                    </span>
                                </td>
                                <td>
                                    <a
                                        href={
                                            stream.videoLink.startsWith("http")
                                                ? stream.videoLink
                                                : `https://${stream.videoLink}`
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-md transition-colors duration-200"
                                    >
                                        View Live
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default LiveStreams;
