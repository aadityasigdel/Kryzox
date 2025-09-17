"use client";

import { useEffect, useState } from "react";
import useGetData from "../../../hooks/getData.js";
import RequestTable from "./ui/RequestTable";
import StatsGrid from "./ui/StatsGrid";

const TopUpManage = () => {
  const [status, setStatus] = useState("PENDING");
  const [searchTerm, setSearchTerm] = useState("");
  const [gameFilter, setGameFilter] = useState("All Games");
  const [notice, setNotice] = useState(null);

  const { getData, result: requests = [], loading, responseError } = useGetData();

 
  const fetchRequests = () => {
    if (status) {
      getData(`topup/status/${status}`);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [status]);

  const handleUpdate = (id, newStatus, success = true) => {
    setNotice({
      type: success ? "success" : "error",
      message: `Request ${id} ${success ? "updated" : "failed"} to ${newStatus}`,
    });

    setTimeout(() => setNotice(null), 3000);

    fetchRequests();
  };

  const filteredRequests = requests.filter((req) => {
    const matchesSearch =
      searchTerm === "" ||
      req.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.user?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.user?.mobileNo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.topupId.toString().includes(searchTerm);

    const matchesGame =
      gameFilter === "All Games" || req.game?.gameTitle === gameFilter;

    return matchesSearch && matchesGame;
  });

  return (
    <div
      className="w-full px-[72px] pt-[65px] min-h-screen relative"
      style={{ background: "linear-gradient(to bottom, #000000, #202020)" }}
    >
      <h1 className="text-3xl font-bold text-[#7d5cff]">Top-Up Management</h1>
      <p className="text-gray-400 mb-8">Manage game top-up requests from users</p>

      {/* Stats */}
      <StatsGrid />

      <div className="rounded-xl shadow-lg bg-[#111] p-6">
        {/* Filters */}
        <div className="flex gap-3 my-4 flex-wrap">
          <input
            type="text"
            placeholder="Search requests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#111] px-4 py-2 rounded-md text-white w-full sm:w-1/2"
          />

          <select
            value={gameFilter}
            onChange={(e) => setGameFilter(e.target.value)}
            className="bg-[#111] px-4 py-2 rounded-md text-white"
          >
            <option>All Games</option>
            <option>Free Fire</option>
            <option>Pubg</option>
            <option>BGMI</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-[#111] px-4 py-2 rounded-md text-white"
          >
            <option value="PENDING">Pending</option>
            <option value="Approved">Approved</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-gray-400 text-center py-6">Loading requests...</p>
        ) : responseError ? (
          <p className="text-red-400 text-center py-6">{responseError}</p>
        ) : (
          <RequestTable
            requests={filteredRequests}
            onUpdate={handleUpdate} // Pass notice-enabled handler
          />
        )}
      </div>

      {/* Notice / Toast */}
      {notice && (
        <div
          className={`fixed bottom-5 right-5 px-4 py-3 rounded shadow-lg text-white font-semibold transition-transform transform ${
            notice.type === "success"
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          {notice.message}
        </div>
      )}
    </div>
  );
};

export default TopUpManage;
