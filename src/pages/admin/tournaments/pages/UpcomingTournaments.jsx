import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import useDeleteData from "../../../../hooks/deleteData";
import useGetData from "../../../../hooks/getData";
import useUpdateData from "../../../../hooks/updateData";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn-ui/select";

// -----------------------------
// Tournament sorting component
// -----------------------------
const SelectGame = ({ setGameId }) => {
  const {
    getData: getGames,
    result,
    responseError,
    setResponseError,
    loading,
    errorCode,
    statusCode,
  } = useGetData();

  useEffect(() => {
    (async () => {
      await getGames("/games/");
    })();
  }, []);

  // to display the result of the games
  useEffect(() => {
    if (result) console.log({ games: result });
  }, [result]);

  const handleIds = (id) => {
    setGameId(id);
  };

  return (
    <div className="">
      <Select
        onValueChange={(id) => {
          handleIds(id);
        }}
        className=""
      >
        <SelectTrigger
          className="bg-[#1B1230]  border border-purple-500/30 
                   placeholder-purple-400 
                  focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
        >
          {" "}
          {/* Updated width */}
          <SelectValue placeholder="Select a game" className=" w-full " />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>GAMES</SelectLabel>
            <SelectItem value={777}>all</SelectItem>
            {result?.map((item) => (
              <SelectItem key={item?.gameId} value={item?.gameId}>
                {item?.gameTitle}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
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
    deleteData,
    result: deleteResult,
    responseError: deleteResponseError,
    setResponseError: setDeleteResponseError,
    loading: deleteLoading,
    statusCode: deleteStatusCode,
  } = useDeleteData();

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
    if (deleteStatusCode === 200) {
      toast.success(deleteResult?.message || "Tournament deleted");
      onRemove(tournament.postId);
    }
    if (deleteResponseError) {
      toast.error(deleteResponseError || "Failed to delete tournament");
      setDeleteResponseError(null);
    }
  }, [deleteStatusCode, deleteResponseError]);

  const acceptTournament = async ({ gameID, gamePw }) => {
    console.log({ gameID, gamePw });
    await acceptData(`/turnmentApp/approve/${tournament.postId}`, {
      gameID,
      gamePw,
    });
  };

  const deleteTournament = async () => {
    await deleteData(`/posts/${tournament.postId}`);
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
            disabled={deleteLoading}
            onClick={deleteTournament}
          >
            {deleteLoading ? (
              <ClipLoader size={20} color="#fff" />
            ) : (
              "Delete Tournament"
            )}
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
  //  state for storing game id which is used to sorting the tournament
  const [gameId, setGameId] = useState(777);
  const {
    getData: getSortData,
    result: sortResult,
    responseError: sortResponseError,
    setResponseError: setSortResponseError,
    loading: sortLoading,
    statusCode: sortStatusCode,
  } = useGetData();

  const {
    getData,
    result: getResult,
    responseError: getResponseError,
    setResponseError: setGetResponseError,
    loading: getLoading,
  } = useGetData();

  const [tournaments, setTournaments] = useState([]);
  // const [page, setPage] = useState(0);
  // const [hasMore, setHasMore] = useState(true);
  // const pageSize = 100;

  // Fetch tournaments
  const fetchTournaments = async () => {
    // const currentPage = page;
    // await getData(
    //   `/posts/status/PENDING?pageNumber=${currentPage}&pageSize=${pageSize}`
    // );
    await getData("/posts/status/PENDING");
    // setPage((prev) => prev + 1);
  };

  // Watch result
  useEffect(() => {
    if (getResult?.content) {
      //   setTournaments((prev) => {
      //     const existingIds = new Set(prev.map((t) => t.postId));
      //     const newItems = getResult.content.filter(
      //       (t) => !existingIds.has(t.postId)
      //     );
      //     return [...prev, ...newItems];
      //   });
      //   setHasMore(!getResult.lastPage);
      setTournaments(getResult.content);
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
  const handleRemoveTournament =  (deleteId) => {
    setTournaments(prev=>{
      const removeData=prev.filter(ele=>ele.postId!==deleteId);
      return removeData;
    });
  };

  // Initial fetch / fetch all tournaments
  useEffect(() => {
    fetchTournaments();
  }, []);

  // fetch tournament by gameId
  useEffect(() => {
    console.log({ gameId });
    (async () => {
      if (gameId !== 777) {
        await getSortData(`/game/${gameId}/posts`);
      } else {
        fetchTournaments();
      }
    })();
  }, [gameId]);

  useEffect(() => {
    if (sortStatusCode === 200) {
      console.log({ sortResult });
      const pendingData = sortResult.filter((ele) => ele.status === "PENDING");
      setTournaments(pendingData);
    }
  }, [sortResult]);
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
      {/* this section is for sub-heading and sorting section */}
      <div className="w-full flex justify-between">
        <p className="text-md text-[#d9cbcb] mb-8">
          Tournaments will be available soon.
        </p>
        <SelectGame setGameId={setGameId} />
      </div>
      {/* Initial loading spinner */}
      {getLoading || sortLoading ? (
        <div className="w-full h-full grid place-content-center">
          <ClipLoader size={50} color="#c084fc" />
        </div>
      ) : tournaments.length === 0 ? (
        // Empty state
        <div className="text-center text-[#c084fc] mt-10">
          <h2 className="text-2xl font-semibold">
            No tournaments available yet
          </h2>
          <p className="text-[#d9cbcb] mt-2">
            Please check back later for upcoming tournaments.
          </p>
        </div>
      ) : (
        // Infinite Scroll for subsequent pages
        // <InfiniteScroll
        //   dataLength={tournaments.length}
        //   next={fetchTournaments}
        //   hasMore={hasMore}
        //   loader={
        //     <h4 className="text-center text-purple-400 my-4">
        //       Loading more tournaments...
        //     </h4>
        //   }
        //   endMessage={
        //     <p style={{ textAlign: "center" }}>
        //       <b>Yay! You have seen it all</b>
        //     </p>
        //   }
        //   className="h-auto w-full px-5 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        // >
        <div className="h-auto w-full px-5 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <UpcomingTournamentsCard
              key={tournament.postId}
              tournament={tournament}
              onRemove={handleRemoveTournament}
            />
          ))}
        </div>
      )}
    </div>
  );
}
