"use client";

import React, { useEffect, useState } from "react";
import RequestTable from "./ui/RequestTable";
import StatsGrid from "./ui/StatsGrid";
import RequestRow from "./ui/RequestRow";
import useGetData from "../../../hooks/getData.js";

const TopUpManage = () => {
  const [active, setActive] = useState("All Requests");
  const [status, setStatus] = useState("PENDING");
  const [searchTerm, setSearchTerm] = useState("");
  const [gameFilter, setGameFilter] = useState("All Games");

  const { getData, result: requests, loading, responseError } = useGetData();


  useEffect(() => {
    if (status) {
      getData(`topup/status/${status}`);
    }
  }, [status]);

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
      className="w-full px-[72px] pt-[65px] min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #000000, #202020)",
      }}
    >
      <h1 className="text-3xl font-bold text-[#7d5cff]">Top-Up Management</h1>
      <p className="text-gray-400 mb-8">
        Manage game top-up requests from users
      </p>

      {/* Stats static*/}
      <StatsGrid />

      {/* Filters */}
      <div className="flex gap-3 my-4">
        {/* search */}
        <input
          type="text"
          placeholder="Search requests..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-[#111] px-4 py-2 rounded-md text-white w-1/2"
        />

        {/* game filter */}
        <select
          value={gameFilter}
          onChange={(e) => setGameFilter(e.target.value)}
          className="bg-[#111] px-4 py-2 rounded-md text-white"
        >
          <option>All Games</option>
          <option>Free Fire</option>
          <option>PUBG</option>
          <option>BGMI</option>
        </select>

        {/* status filter */}
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

      {/* Tabs */}
      <RequestRow active={active} setActive={setActive} />

      {/* Table */}
      {loading ? (
        <p className="text-gray-400 text-center py-6">Loading requests...</p>
      ) : responseError ? (
        <p className="text-red-400 text-center py-6">{responseError}</p>
      ) : (
        <RequestTable requests={filteredRequests} />
      )}
    </div>
  );
};

export default TopUpManage;
