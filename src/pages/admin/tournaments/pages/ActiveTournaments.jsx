
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGetData from "../../../../hooks/getData";
import ClipLoader from "react-spinners/ClipLoader";

// -----------------------------
// Read-only Tournament Card Component
// -----------------------------
const ActiveTournamentCard = ({ tournament }) => {
  return (
    <div className="transition-transform duration-300 hover:scale-105">
      <div
        className="rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full"
        style={{
          background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)",
          border: "1px solid rgba(192, 132, 252, 0.25)",
        }}
      >
        <div>
          <h2 className="text-2xl font-bold mb-2 text-[#E0C3FC]">
            {tournament.title}
          </h2>

          <p className="text-[#bfbfbf] mb-2">
            <span className="font-semibold text-[#c084fc]">Game:</span>{" "}
            {tournament.game?.gameTitle}
          </p>

          <div className="space-y-2 text-sm mb-6">
            <p className="flex items-center gap-2 text-[#d1d1d1]">
              <span className="font-semibold text-[#c084fc]">Mode:</span>{" "}
              {tournament.gameMode?.modeName}
            </p>
            <p className="flex items-center gap-2 text-[#d1d1d1]">
              <span className="font-semibold text-[#c084fc]">Entry Fee:</span>{" "}
              {tournament.entryFee}
            </p>
            <p className="flex items-center gap-2 text-[#d1d1d1]">
              <span className="font-semibold text-[#c084fc]">Start Time:</span>{" "}
              {new Date(
                tournament.startTime[0],
                tournament.startTime[1] - 1,
                tournament.startTime[2],
                tournament.startTime[3],
                tournament.startTime[4]
              ).toLocaleString()}
            </p>
            <p className="flex items-center gap-2 text-[#d1d1d1]">
              <span className="font-semibold text-[#c084fc]">Status:</span>{" "}
              {tournament.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// -----------------------------
// Main Page: Active Tournaments
// -----------------------------
export function ActiveTournaments() {
  const { getData, result, responseError, loading } = useGetData();

  const [tournaments, setTournaments] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 6;

  // -----------------------------
  // Fetch tournaments
  // -----------------------------
  const fetchTournaments = async () => {
    const currentPage = page;
    // await getData(`/posts/status/APPROVED?pageNumber=${currentPage}&pageSize=${pageSize}`);
    await getData("/posts/status/PENDING");
    setPage(prev => prev + 1);
  };

  // -----------------------------
  // Watch for result changes
  // -----------------------------
  useEffect(() => {
    if (result?.content) {
      setTournaments(prev => {
        const existingIds = new Set(prev.map(t => t.postId));
        const newItems = result.content.filter(t => !existingIds.has(t.postId));
        return [...prev, ...newItems];
      });
      setHasMore(!result.lastPage);
    }
  }, [result]);

  // -----------------------------
  // Initial fetch
  // -----------------------------
  useEffect(() => {
    fetchTournaments();
  }, []);

  // -----------------------------
  // Render
  // -----------------------------
  const renderContent = () => {
    if (loading && tournaments.length === 0) {
      return (
        <div className="w-full h-full grid place-content-center">
          <ClipLoader size={50} color="#c084fc" />
        </div>
      );
    }

    if (responseError) {
      return (
        <div className="text-center text-red-400 mt-10">
          <h2 className="text-2xl font-semibold">Error loading tournaments</h2>
          <p className="mt-2">{responseError}</p>
        </div>
      );
    }

    if (tournaments.length === 0) {
      return (
        <div className="text-center text-[#c084fc] mt-10">
          <h2 className="text-2xl font-semibold">No active tournaments yet</h2>
          <p className="text-[#d9cbcb] mt-2">
            Please check back later for active tournaments.
          </p>
        </div>
      );
    }

    return (
      <InfiniteScroll
        dataLength={tournaments.length}
        next={fetchTournaments}
        hasMore={hasMore}
        loader={
          <h4 className="text-center text-purple-400 my-4">
            Loading more tournaments...
          </h4>
        }
        className="h-auto w-full px-5 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {tournaments.map(tournament => (
          <ActiveTournamentCard key={tournament.postId} tournament={tournament} />
        ))}
      </InfiniteScroll>
    );
  };

  return (
    <div
      className="flex-1 p-8 text-white bg-[#1B1230] min-h-screen"
      style={{ background: "linear-gradient(to bottom, #000000, #202020)" }}
    >
      {/* Heading + Subheading */}
      <h1
        className="text-4xl font-semibold mb-2 leading-16"
        style={{
          background: "linear-gradient(45deg, #c84de5, #79a5d5, #5e41a1)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Active Tournaments
      </h1>
      <p className="text-md text-[#d9cbcb] mb-8">
        All of the active tournaments
      </p>

      {/* Main content */}
      {renderContent()}
    </div>
  );
}
