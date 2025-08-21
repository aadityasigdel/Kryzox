import { useState, useEffect } from "react";
import HeadingSection from "../ui/shared/HeadingSection";
import TournamentCard from "./ui/TournamentCard";
import { TournamentCreationForm } from "./ui/Form";
import useGetData from "../../../hooks/getData";
// static data
const baseTournamentCardData = [
  {
    key: "active-tournaments",
    gradientColor: { color1: "#B05BDB", color2: "#202020" },
    heading: "Active Tournaments",
    icon: "/admin/tournament/medal.png",
    bottomContent: "Currently running",
  },
  {
    key: "total-participant",
    gradientColor: { color1: "#800080", color2: "#202020" },
    heading: "Total Participants",
    icon: "/admin/tournament/group.png",
    bottomContent: "Across all tournaments",
  },
  {
    key: "upcoming",
    gradientColor: { color1: "#BA55D3", color2: "#202020" },
    heading: "Upcoming",
    icon: "/admin/tournament/event.png",
    bottomContent: "Starting this month",
  },
  {
    key: "prize-pool",
    gradientColor: { color1: "#7400BB", color2: "#202020" },
    heading: "Prize Pool",
    icon: "/admin/tournament/dollar.png",
    bottomContent: "Total active pools",
  },
];

const Tournaments = () => {
   const { getData, result, responseError, loading, errorCode, statusCode } =
    useGetData();
  const [dynamicData, setDynamicData] = useState({
    "active-tournaments": { loading: true, totalData: "0", data: [] },
    "total-participant": { loading: false, totalData: "2.4k", data: [] }, // fallback static values
    upcoming: { loading: false, totalData: "12", data: [] },
    "prize-pool": { loading: false, totalData: "KX.45k", data: [] },
  });

  useEffect(() => {
    (async () => {
      await getData("/posts/status/PENDING");
    })();
  }, []);
  useEffect(() => {
    if (statusCode === 200) {
      setDynamicData((prev) => ({
        ...prev,
        "active-tournaments": {
          totalData: result.totalElements,
          data: result,
          loading:loading
        },
      }));
      console.log({ errorCode });
      console.log({ result });
    }
    if (responseError) console.log({ responseError });
  }, [result, responseError, statusCode]);
  return (
    <div
      className=" w-full h-full px-[72px] pt-[65px]"
      style={{
        background: "linear-gradient(to bottom, #000000, #202020)",
      }}
    >
      {/* heading section */}
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 relative">
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
          <p className="text-[18px] text-[#B05BDB] font-semibold">
            Create and manage tournaments across all games
          </p>
        </div>
        {/* testig drawer section */}
        <div className="w-auto">
          <TournamentCreationForm />
        </div>
      </div>
      {/* tourament card section */}
      <section className="flex gap-10 mt-10">
        {baseTournamentCardData.map((item, index) => {
          return (
            <TournamentCard
              key={index}
              gradientColor={item.gradientColor}
              heading={item.heading}
              totalData={dynamicData[item.key]?.totalData}
              icon={item.icon}
              bottomContent={item.bottomContent}
              data={dynamicData[item.key]?.data}
              loading={dynamicData[item.key]?.loading}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Tournaments;
