import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGetData from "../../../../hooks/getData";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn-ui/select";
import {
  setFilteredTournaments,
  setIsTyping,
  setSearchInput,
  setTournamentLoading,
  setTournaments,
} from "../../../../store/slices/tournament.slice";

const SearchComponent = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { tournaments, searchInput, isTyping } = useSelector(
    (state) => state.tournament
  );
  const HandleChange = (e) => {
    console.log({ isTyping });
    if (isTyping === false) {
      dispatch(setIsTyping(true));
    }
    setInput(e.target.value);
  };
  useEffect(() => {
    const filtered = tournaments.filter(
      (tournament) =>
        tournament?.title.toLowerCase().includes(input.toLowerCase()) ||
        tournament?.game.gameTitle.toLowerCase().includes(input.toLowerCase())
    );
    dispatch(setFilteredTournaments(filtered));
  }, [input]);
  return (
    <div className="relative bg-[#121417]  border border-[#21252B] w-[256px] h-[50px] rounded-[6px]">
      <img
        src="/admin/user-management/searchIcon.png"
        alt="Search"
        className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none z-10"
      />
      <input
        type="text"
        placeholder="Search tournaments..."
        onChange={HandleChange}
        className="absolute inset-0 w-full h-full text-white placeholder:text-[#C0C0C0] pl-16 pr-4 outline-none"
        style={{
          borderRadius: "6.61px",
        }}
      />
    </div>
  );
};

const SelectGame = () => {
  const { tournamentLoading } = useSelector((state) => state.tournament);
  const {
    getData: getGames,
    result,
    responseError,
    setResponseError,
    loading,
    errorCode,
    statusCode,
  } = useGetData();

  const {
    getData: getSortData,
    result: sortResult,
    responseError: sortResponseError,
    setResponseError: setSortResponseError,
    loading: sortLoading,
    errorCode: sortErrorCode,
    statusCode: sortStatusCode,
  } = useGetData();
  const [gameId, setGameId] = useState(777); // Default to "all"
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await getGames("/games/");
    })();
  }, []);

  // to display the result of the games
  useEffect(() => {
    if (sortResult?.content || sortResult) {
      dispatch(setTournaments(sortResult?.content || sortResult));
    }
  }, [sortResult]);

  // fetch tournament by gameId
  useEffect(() => {
    console.log({ gameId });
    (async () => {
      if (gameId !== 777) {
        await getSortData(`/game/${gameId}/posts`);
      } else {
        await getSortData(`/posts`);
      }
    })();
  }, [gameId]);

  // to set global loading state
  useEffect(() => {
    dispatch(setTournamentLoading(sortLoading));
  }, [sortLoading]);
  useEffect(() => {
    console.log({ tournamentLoading });
  }, [tournamentLoading]);

  return (
    <div className="">
      <Select
        onValueChange={(id) => {
          setGameId(Number(id));
        }}
        className=""
      >
        <SelectTrigger className="min-w-[128px] !h-[50px] bg-[#202020] border-none rounded-lg text-white ">
          {" "}
          {/* Updated width */}
          <SelectValue placeholder="Select a game" className=" w-full " />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>GAMES</SelectLabel>
            <SelectItem value={String(777)}>Select All</SelectItem>
            {result?.map((item) => (
              <SelectItem key={item?.gameId} value={String(item?.gameId)}>
                {item?.gameTitle}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
const TabHeading = () => {
  const [gameId, setGameId] = useState(777);
  return (
    <div className="w-full flex justify-between">
      {/* heading text section */}
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="text-[20px] md:text-[24px] font-bold relative">
            <span
              className="text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(45deg, #80FFDB, #B05BDB)",
                WebkitBackgroundClip: "text",
              }}
            >
              Tournament Management
            </span>
          </h1>
          <p className="text-[16px] text-[#B05BDB] font-semibold">
            Monitor and manage all tournaments
          </p>
        </div>
      </div>
      {/*search section and sorting section */}
      <div className="flex items-center gap-4">
        {/* search section */}
        <div>
          <SearchComponent />
        </div>
        {/* sorting section */}
        <div>
          <SelectGame setGameId={setGameId} />
        </div>
      </div>
    </div>
  );
};

export default TabHeading;
