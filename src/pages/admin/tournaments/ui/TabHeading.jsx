import React, { useEffect, useState } from "react";
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

const SearchComponent = () => {
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
        className="absolute inset-0 w-full h-full text-white placeholder:text-[#C0C0C0] pl-16 pr-4 outline-none"
        style={{
          borderRadius: "6.61px",
        }}
      />
    </div>
  );
};

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
        <SelectTrigger className="w-full !h-[50px] bg-[#202020] border-none rounded-lg text-white ">
          {" "}
          {/* Updated width */}
          <SelectValue placeholder="Select a game" className=" w-full " />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>GAMES</SelectLabel>
            <SelectItem value={777}>all</SelectItem>
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
    <div className="w-full flex justify-between mt-10">
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
