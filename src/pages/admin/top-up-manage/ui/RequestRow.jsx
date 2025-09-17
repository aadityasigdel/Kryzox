import React from "react";

const statusColors = {
    PENDING: "text-yellow-400 bg-yellow-900/30",
    APPROVED: "text-green-400 bg-green-900/30",
    REJECTED: "text-red-400 bg-red-900/30",
};

const RequestRow = ({ request }) => {
    if (!request) return null;

    return (
        <tr className="border-b border-gray-800 hover:bg-gray-800/40 transition">
            <td className="px-4 py-3">
                {request.topupId ?? request.id ?? "—"}
            </td>
            <td className="px-4 py-3">{request.game?.gameTitle ?? "—"}</td>
            <td className="px-4 py-3">{request.amount ?? "—"}</td>
            <td className="px-4 py-3">{request.itemName ?? "—"}</td>
            <td className="px-4 py-3">
                <span
                    className={`px-2 py-1 rounded ${
                        statusColors[request.status] ||
                        "bg-gray-700 text-gray-300"
                    }`}
                >
                    {request.status ?? "UNKNOWN"}
                </span>
            </td>
            <td className="px-4 py-3">{request.user.name ?? "—"}</td>
            <td className="px-4 py-3 flex gap-2">
                <button className="px-3 py-1 bg-gray-700 rounded">View</button>
                {request.status === "PENDING" && (
                    <>
                        <button className="px-3 py-1 bg-green-600 rounded">
                            Approve
                        </button>
                        <button className="px-3 py-1 bg-red-600 rounded">
                            Reject
                        </button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default RequestRow;
