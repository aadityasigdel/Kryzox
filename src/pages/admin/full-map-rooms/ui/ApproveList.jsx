import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetData from "../../../../hooks/getData.js";
import useUpdateData from "../../../../hooks/updateData.js";
import Button from "../../ui/shared/Button";

const formatDateArray = (arr) => {
    if (!Array.isArray(arr)) return "-";
    const [year, month, day, hour = 0, minute = 0] = arr;
    if (!year || !month || !day) return "-";
    return `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")} ${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
};

export default function ApproveList() {
    const { fullmapId } = useParams();
    const {
        getData,
        result: requests = [],
        responseError,
        loading,
    } = useGetData();
    const {
        updateData,
        result: updateResult,
        responseError: postError,
        loading: actionLoading,
    } = useUpdateData();

    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        if (!fullmapId) return;
        getData(`/fullmapApp/fullmap/${fullmapId}?status=PENDING`);
    }, [fullmapId]);

    const handleAction = async (fullmapAppId, action) => {
        await updateData(`/fullmapApp/approve/${fullmapAppId}`, { action });

        if (!postError) {
            setSuccessMessage(
                `✅ Request ${
                    action === "ACCEPT" ? "approved" : "rejected"
                } successfully!`
            );
            getData(`/fullmapApp/fullmap/${fullmapId}?status=PENDING`);

            setTimeout(() => setSuccessMessage(""), 3000); 
        }
    };

    if (loading)
        return (
            <div className="flex justify-center items-center h-64 text-gray-400">
                ⏳ Loading pending requests...
            </div>
        );

    if (responseError)
        return (
            <div className="flex justify-center items-center h-64 text-red-400">
                ❌ Error: {responseError}
            </div>
        );

    return (
        <div className="flex flex-col h-[75vh]">
            <h1 className="text-xl font-semibold text-white mb-4 flex-shrink-0">
                Pending Requests
            </h1>

            <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                {!requests || requests.length === 0 ? (
                    <p className="text-gray-400">No pending requests found.</p>
                ) : (
                    requests.map((req) => (
                        <div
                            key={req.fullmapAppId}
                            className="bg-white/5 backdrop-blur-md border border-white/40 rounded-lg p-4 shadow-md flex items-center justify-between"
                        >
                            <div>
                                <h2 className="text-md font-medium text-white">
                                    {req.fullMap?.user.name ||
                                        req.fullMap?.user.email ||
                                        "Unnamed User"}
                                </h2>
                                <p className="text-xs text-gray-300">
                                    User ID: {req.fullMap?.user.id || "-"}
                                </p>
                                <p className="text-xs text-gray-400">
                                    Requested At:{" "}
                                    {formatDateArray(req.requestAt)}
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        req.status === "PENDING"
                                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                                            : req.status === "APPROVED"
                                            ? "bg-green-500/20 text-green-400 border border-green-400/30"
                                            : "bg-red-500/20 text-red-400 border border-red-400/30"
                                    }`}
                                >
                                    {req.status}
                                </span>

                                <Button
                                    func={() =>
                                        handleAction(req.fullmapAppId, "ACCEPT")
                                    }
                                    disabled={actionLoading}
                                >
                                    Accept
                                </Button>

                                <Button
                                    func={() => {
                                        if (
                                            window.confirm(
                                                "Are you sure you want to reject this request?"
                                            )
                                        ) {
                                            handleAction(
                                                req.fullmapAppId,
                                                "REJECT"
                                            );
                                        }
                                    }}
                                    disabled={actionLoading}
                                >
                                    Reject
                                </Button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* ✅ Show success or error messages */}
            {successMessage && (
                <div className="text-green-400 mt-2 text-center">
                    {successMessage}
                </div>
            )}

            {postError && (
                <div className="text-red-400 mt-2 text-center">
                    ❌ {postError}
                </div>
            )}
        </div>
    );
}
