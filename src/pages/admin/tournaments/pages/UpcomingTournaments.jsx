import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useUpdateData from "../../../../hooks/updateData";
import useGetData from "../../../../hooks/getData";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

// -----------------------------
// Tournament Card Component
// -----------------------------
const UpcomingTournamentsCard = ({ tournament, onRemove }) => {
  const {
    updateData: acceptData,
    result: acceptResult,
    responseError: acceptResponseError,
    setResponseError: setAcceptResponseError,
    loading: acceptLoading,
    statusCode: acceptStatusCode,
  } = useUpdateData();

  const {
    updateData: rejectData,
    result: rejectResult,
    responseError: rejectResponseError,
    setResponseError: setRejectResponseError,
    loading: rejectLoading,
    statusCode: rejectStatusCode,
  } = useUpdateData();

  useEffect(() => {
    if (acceptStatusCode === 200) {
      toast.success(acceptResult?.message || "Tournament accepted");
      onRemove(tournament.postId);
    }
    if (acceptResponseError) {
      toast.error(acceptResponseError || "Failed to accept tournament");
      setAcceptResponseError(null);
    }
  }, [acceptStatusCode, acceptResponseError]);

  useEffect(() => {
    if (rejectStatusCode === 200) {
      toast.success(rejectResult?.message || "Tournament rejected");
      onRemove(tournament.postId);
    }
    if (rejectResponseError) {
      toast.error(rejectResponseError || "Failed to reject tournament");
      setRejectResponseError(null);
    }
  }, [rejectStatusCode, rejectResponseError]);

  const acceptTournament = async ({gameID,gamePw}) => {
    console.log({gameID,gamePw});
    await acceptData(`/turnmentApp/approve/${tournament.postId}`,{gameID,gamePw});
  };

  const rejectTournament = async () => {
    await rejectData(`/post/${tournament.postId}/reject`);
  };

  return (
    <div
      key={tournament.postId}
      className="transition-transform duration-300 hover:scale-105"
    >
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
              <span className="font-semibold text-[#c084fc]">Map:</span>{" "}
              {tournament.map?.mapTitle}
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

        <div className="flex gap-5 flex-row">
          {/* <button
            className="w-full py-2 rounded-lg text-sm font-semibold text-white 
               bg-gradient-to-r from-purple-600 to-pink-500 
               shadow-lg shadow-purple-700/50
               transition-all duration-300 hover:scale-105 hover:shadow-purple-500/80"
            disabled={acceptLoading}
            onClick={()=>{acceptTournament({gameID:tournament?.gameID,gamePw:tournament?.gamePw})}}
          >
            {acceptLoading ? <ClipLoader size={20} color="white" /> : "Accept"}
          </button> */}

          <button
            className="w-full py-2 rounded-lg text-sm font-semibold text-white 
               bg-gradient-to-r from-red-600 to-pink-500 
               shadow-lg shadow-red-700/50
               transition-all duration-300 hover:scale-105 hover:shadow-red-500/80"
            disabled={rejectLoading}
            onClick={rejectTournament}
          >
            {rejectLoading ? <ClipLoader size={20} color="#fff" /> : "Delete Tournament"}
          </button>
        </div>
      </div>
    </div>
  );
};

// -----------------------------
// Main Component with Infinite Scroll
// -----------------------------
export function UpcomingTournaments() {
  const {
    getData,
    result: getResult,
    responseError: getResponseError,
    setResponseError: setGetResponseError,
    loading: getLoading,
  } = useGetData();

  const [tournaments, setTournaments] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 6;

  // Fetch tournaments
  const fetchTournaments = async () => {
    const currentPage = page;
    await getData(`/posts/status/PENDING?pageNumber=${currentPage}&pageSize=${pageSize}`);
    setPage(prev => prev + 1);
  };

  // Watch result
  useEffect(() => {
    if (getResult?.content) {
      setTournaments(prev => {
        const existingIds = new Set(prev.map(t => t.postId));
        const newItems = getResult.content.filter(t => !existingIds.has(t.postId));
        return [...prev, ...newItems];
      });
      setHasMore(!getResult.lastPage);
    }
  }, [getResult]);

  // Handle errors
  useEffect(() => {
    if (getResponseError) {
      toast.error(getResponseError || "Something went wrong");
      setTimeout(() => setGetResponseError(null), 1000);
    }
  }, [getResponseError]);

  // Remove tournament after accept/reject
  const handleRemoveTournament = (postId) => {
    setTournaments(prev => {
      const updated = prev.filter(t => t.postId !== postId);
      if (updated.length < pageSize && hasMore) {
        fetchTournaments();
      }
      return updated;
    });
  };

  // Initial fetch
  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <div
      className="flex-1 p-8 text-white bg-[#1B1230] min-h-screen"
      style={{ background: "linear-gradient(to bottom, #000000, #202020)" }}
    >
      {/* Heading always visible */}
      <h1
        className="text-4xl font-semibold mb-2 leading-16"
        style={{
          background: "linear-gradient(45deg, #c84de5, #79a5d5, #5e41a1)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Upcoming Tournaments
      </h1>
      <p className="text-md text-[#d9cbcb] mb-8">
        Tournaments will be available soon.
      </p>

      {/* Initial loading spinner */}
      {getLoading && tournaments.length === 0 ? (
        <div className="w-full h-full grid place-content-center">
          <ClipLoader size={50} color="#c084fc" />
        </div>
      ) : tournaments.length === 0 ? (
        // Empty state
        <div className="text-center text-[#c084fc] mt-10">
          <h2 className="text-2xl font-semibold">No tournaments available yet</h2>
          <p className="text-[#d9cbcb] mt-2">
            Please check back later for upcoming tournaments.
          </p>
        </div>
      ) : (
        // Infinite Scroll for subsequent pages
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
          {tournaments.map((tournament) => (
            <UpcomingTournamentsCard
              key={tournament.postId}
              tournament={tournament}
              onRemove={handleRemoveTournament}
            />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
}
