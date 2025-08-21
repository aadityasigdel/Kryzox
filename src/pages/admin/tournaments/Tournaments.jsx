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
  const [dynamicData, setDynamicData] = useState({
    "active-tournaments": { loading: true, totalData: "0", data: [] },
    "total-participant": { loading: false, totalData: "0", data: [] }, // fallback static values
    upcoming: { loading: false, totalData: "0", data: [] },
    "prize-pool": { loading: false, totalData: "0k", data: [] },
  });

  //this is for active tournament
  const {
    getData: getActiveTournamentData,
    result: activeTournamentResult,
    responseError: activeTournamentResponseError,
    loading: activeTournamentLoading,
    errorCode,
    statusCode: activeTournamentStatusCode,
  } = useGetData();

  // this is for total participant
  const {
    getData: getTotalParticipantData,
    result: totalParticipantResult,
    responseError: totalparticipantResponseError,
    loading: totalParticipantLoading,
    statusCode: totalParticipantStatusCode,
  } = useGetData();

  // active tournament section starts from here
  useEffect(() => {
    (async () => {
      await getActiveTournamentData("/posts/status/PENDING");
    })();
  }, []);
  useEffect(() => {
    if (activeTournamentStatusCode === 200) {
      setDynamicData((prev) => ({
        ...prev,
        "active-tournaments": {
          totalData: activeTournamentResult.totalElements,
          data: activeTournamentResult,
          loading: activeTournamentLoading,
        },
      }));
    }
    if (activeTournamentResponseError)
      console.log({ activeTournamentResponseError });
  }, [
    activeTournamentResult,
    activeTournamentResponseError,
    activeTournamentStatusCode,
  ]);

  // End of active tournament section

  // Total participant section starts from here
  useEffect(() => {
    (async () => {
      // route will be provided later
      await getTotalParticipantData("/"); 
    })();
  }, []);
  useEffect(() => {
    if (totalParticipantStatusCode === 200) {
      setDynamicData((prev) => ({
        ...prev,
        "total-participant": {
          totalData: totalParticipantResult.totalElements,
          data: totalParticipantResult,
          loading: totalParticipantLoading,
        },
      }));
    }
    if (totalparticipantResponseError)
      console.log({ totalparticipantResponseError });
  }, [
    totalParticipantResult,
    totalparticipantResponseError,
    totalParticipantStatusCode,
  ]);

  // End of total participant section
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
