import React from "react";
import HeadingSection from "../ui/shared/HeadingSection";
import TournamentCard from "./ui/TournamentCard";
import {TournamentCreationForm} from  "./ui/Form";
const TournamentCardData = [
  {
    gradientColor: { color1: "#B05BDB", color2: "#202020" },
    heading: "Active Tournaments",
    totalData: "8",
    icon: "/admin/tournament/medal.png",
    bottomContent:"Currently running"
  },
  {
    gradientColor: { color1: "#800080", color2: "#202020" },
    heading: "Total Participants",
    totalData: "2.4k",
    icon: "/admin/tournament/group.png",
    bottomContent:"Across all tournaments"
  },
  {
    gradientColor: { color1: "#BA55D3", color2: "#202020" },
    heading: "Upcoming",
    totalData: "12",
    icon: "/admin/tournament/event.png",
    bottomContent:"Starting this month"
  },
  {
    gradientColor: { color1: "#7400BB", color2: "#202020" },
    heading: "Prize Pool",
    totalData: "KX.45k",
    icon: "/admin/tournament/dollar.png",
    bottomContent:"Total active pools"
  },
];
const Tournaments = () => {
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
      <p className="text-[18px] text-[#B05BDB] font-semibold">Create and manage tournaments across all games</p>
      </div>
    {/* testig drawer section */}
    <div className="w-auto"><TournamentCreationForm /></div>
    </div>
    {/* tourament card section */}
     <section className="flex gap-10 mt-10">
        {TournamentCardData.map((item, index) => {
          return (
            <TournamentCard
              key={index}
              gradientColor={item.gradientColor}
              heading={item.heading}
              totalData={item.totalData}
              icon={item.icon}
              bottomContent={item.bottomContent}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Tournaments;
