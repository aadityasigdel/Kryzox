import React from "react";
import HeadingSection from "../ui/shared/HeadingSection";
import RoomManagementCard from "./ui/RoomManagementCard";
const cardData = [
  {
    left: "Room Name",
    right: "Running",
  },
  {
    left: "User ID:",
    right: "324143354",
  },
  {
    left: "Game:",
    right: "PUBG Mobile",
  },
  {
    left: "Players:",
    right: "1v1",
  },
  {
    left: "Creator",
    right: "Progamer123",
  },
  {
    left: "Entry Fee:",
    right: "$5",
  },
  {
    left: "Prize:",
    right: "$30",
  },
  {
    left: "/admin/room-management/setting.png",
    right: "/admin/room-management/trash.png",
  },
];
const RoomManagement = () => {
  return (
    <div
      className="min-h-[1024px] w-full min-w-[1148px] px-[72px] pt-[65px]"
      style={{
        background: "linear-gradient(to bottom, #000000, #202020)",
      }}
    >
      <HeadingSection
        heading={"Room Management"}
        subheading={"Manage multiplayer gaming sessions and rooms and payment"}
      />
      {/* card section */}
      <div className="w-full">
        <div className="flex my-10 gap-5">
          <img src="/admin/room-management/star.png" alt="star_image" />
          <h1 className="text-[22px] text-[#80FFDB]">Running Rooms</h1>
        </div>
        {/* card section */}
        <div className="flex justify-between">
          {[...new Array(3)].map((ele, index) => {
            return <RoomManagementCard key={index} cardData={cardData} />;
          })}
        </div>
      </div>
      {/* schedule rooms section */}
      {/* card section */}
      <div className="w-full">
        <div className="flex my-10 items-center gap-5">
          <img src="/admin/room-management/remainder.png" alt="star_image" className="h-6 w-6 object-cover"/>
          <h1 className="text-[22px] text-[#80FFDB]">Scheduled Rooms</h1>
        </div>
        {/* card section */}
        <div className="flex justify-between">
          {[...new Array(3)].map((ele, index) => {
            return <RoomManagementCard key={index} cardData={cardData} />;
          })}
        </div>
      </div>
      {/* completed rooms */}
      {/* card section */}
      <div className="w-full">
        <div className="flex items-center my-10 gap-5">
          <img src="/admin/room-management/remainder.png" alt="star_image" className="h-6 w-6 object-cover"/>
          <h1 className="text-[22px] text-[#80FFDB]">Completed Rooms</h1>
        </div>
        {/* card section */}
        <div className="flex justify-between">
          {[...new Array(3)].map((ele, index) => {
            return <RoomManagementCard key={index} cardData={cardData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomManagement;
