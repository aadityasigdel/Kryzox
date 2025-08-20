import React, { useEffect } from "react";
import HeadingSection from "../ui/shared/HeadingSection";
import TournamentCard from "./ui/TournamentCard";
import { TournamentCreationForm } from "./ui/Form";
import useGetData from "../../../hooks/getData";
let TournamentCardData = [
  {
    gradientColor: { color1: "#B05BDB", color2: "#202020" },
    key:"active-tournaments",
    heading: "Active Tournaments",
    totalData: "8",
    icon: "/admin/tournament/medal.png",
    bottomContent: "Currently running",
    loading:false,
    data:[]
  },
  {
    gradientColor: { color1: "#800080", color2: "#202020" },
    key:"total-participant",
    heading: "Total Participants",
    totalData: "2.4k",
    icon: "/admin/tournament/group.png",
    bottomContent: "Across all tournaments",
    loading:false,
    data:[]
  },
  {
    gradientColor: { color1: "#BA55D3", color2: "#202020" },
    key:"upcoming",
    heading: "Upcoming",
    totalData: "12",
    icon: "/admin/tournament/event.png",
    bottomContent: "Starting this month",
    loading:false,
    data:[]
  },
  {
    gradientColor: { color1: "#7400BB", color2: "#202020" },
    key:"prize-pool",
    heading: "Prize Pool",
    totalData: "KX.45k",
    icon: "/admin/tournament/dollar.png",
    bottomContent: "Total active pools",
    loading:false,
    data:[]
  },
];
const Tournaments = () => {
  const { getData, result, responseError, loading, errorCode, statusCode } =
    useGetData();
  useEffect(() => {
    (async () => {
      await getData("/posts/status/PENDING");
    })();
  }, []);
  useEffect(() => {
    if (statusCode === 200) {
      TournamentCardData=TournamentCardData.map(ele=>{
        if(ele.key==="active-tournaments") return {...ele,totalData:[result.totalElements],data:[result]};
        return ele;
      });
      console.log({errorCode})
      console.log({ result });
      if (responseError) console.log({ responseError });
    }
  }, [result, responseError,statusCode]);
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
        {TournamentCardData.map((item, index) => {
          return (
            <TournamentCard
              key={index}
              gradientColor={item.gradientColor}
              heading={item.heading}
              totalData={ item.totalData}
              icon={item.icon}
              bottomContent={item.bottomContent}
              data={item.data}
              loading={loading}
            />
          );

        })}
      </section>
    </div>
  );
};

export default Tournaments;
