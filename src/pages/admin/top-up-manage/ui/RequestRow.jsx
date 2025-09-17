import React, { useState } from "react";

const statusColors = {
  PENDING: "text-yellow-400 bg-yellow-900/30",
  APPROVED: "text-green-400 bg-green-900/30",
  REJECTED: "text-red-400 bg-red-900/30",
};

const RequestRow = ({ request }) => {
  const [approveLoading, setApproveLoading] = useState(false);
  const [rejectLoading, setRejectLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [actionType, setActionType] = useState("");

  if (!request) return null;

  const openConfirm = (type) => {
    setActionType(type);
    setShowConfirm(true);
  };

  const cancelAction = () => {
    setShowConfirm(false);
    setActionType("");
  };

  const confirmAction = () => {
    setShowConfirm(false);
    if (actionType === "approve") {
      setApproveLoading(true);
      console.log("Approved topupId:", request.topupId);
      setTimeout(() => setApproveLoading(false), 500);
    } else if (actionType === "reject") {
      setRejectLoading(true);
      console.log("Rejected topupId:", request.topupId);
      setTimeout(() => setRejectLoading(false), 500);
    }
    setActionType("");
  };

  return (
    <>
      <tr className="border-b border-gray-800 hover:bg-gray-800/40 transition">
        <td className="px-4 py-3">{request.topupId ?? request.id ?? "—"}</td>
        <td className="px-4 py-3">{request.game?.gameTitle ?? "—"}</td>
        <td className="px-4 py-3">{request.amount ?? "—"}</td>
        <td className="px-4 py-3">{request.itemName ?? "—"}</td>
        <td className="px-4 py-3">
          <span
            className={`px-2 py-1 rounded ${
              statusColors[request.status] || "bg-gray-700 text-gray-300"
            }`}
          >
            {request.status ?? "UNKNOWN"}
          </span>
        </td>
        <td className="px-4 py-3">{request.user?.name ?? "—"}</td>
        <td className="px-4 py-3 flex gap-2">
          {request.status === "PENDING" && (
            <>
              <button
                onClick={() => openConfirm("approve")}
                disabled={approveLoading}
                className={`px-4 py-2 rounded font-semibold text-white transition-colors duration-200 ${
                  approveLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#B05BDB] to-[#80FFDB] hover:from-[#C06BDD] hover:to-[#1ac595]"
                }`}
              >
                {approveLoading ? "Approving..." : "Approve"}
              </button>

              <button
                onClick={() => openConfirm("reject")}
                disabled={rejectLoading}
                className={`px-4 py-2 rounded font-semibold text-white transition-colors duration-200 ${
                  rejectLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#B05BDB] to-[#80FFDB] hover:from-[#C06BDD] hover:to-[#1ac595]"
                }`}
              >
                {rejectLoading ? "Rejecting..." : "Reject"}
              </button>
            </>
          )}
        </td>
      </tr>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-gradient-to-b from-[#202020] to-[#111] rounded-lg p-5 w-80 max-w-[90%] text-center shadow-lg border border-[#B05BDB]">
            <h2 className="text-lg font-semibold text-[#B05BDB] mb-2">
              {actionType === "approve" ? "Confirm Approval" : "Confirm Rejection"}
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              Are you sure you want to{" "}
              {actionType === "approve" ? "approve" : "reject"} this topup? <br />
              Topup ID: {request.topupId}
            </p>
            <div className="flex justify-between gap-3">
              <button
                onClick={cancelAction}
                className="flex-1 px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmAction}
                className="flex-1 px-4 py-2 rounded-md bg-[#B05BDB] hover:bg-[#C06BDD] text-white font-medium transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestRow;
