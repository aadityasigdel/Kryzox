import React from "react";
import HeadingSection from "../ui/shared/HeadingSection";
import RoomManagementCard from "./ui/RoomManagementCard";
import CompletedRoomCard from "./ui/CompletedRoomCard";
import Button from "./ui/Button";
import "./style.css";
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
const CompletedRoomDataLeft = [
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
    left: "Creator/player1",
    right: "Progamer123",
  },
  {
    left: "Prize:",
    right: "$30",
  },
  {
    left: "Time:",
    right: "08:25 PM",
  },
];
const completedRoomDataRight = [
  {
    left: "User ID:",
    right: "324143354",
  },
  {
    left: "Game Name:",
    right: "Sniper342",
  },
  {
    left: "Player2:",
    right: "Progamer123",
  },
  {
    left: "Prize:",
    right: "$30",
  },
  {
    left: "Time:",
    right: "08:25 PM",
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
          <img
            src="/admin/room-management/remainder.png"
            alt="star_image"
            className="h-6 w-6 object-cover"
          />
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
          <img
            src="/admin/room-management/remainder.png"
            alt="star_image"
            className="h-6 w-6 object-cover"
          />
          <h1 className="text-[22px] text-[#80FFDB]">Completed Rooms</h1>
        </div>
        {/* card section */}
        <div className="flex justify-between">
          <CompletedRoomCard
            cardData={CompletedRoomDataLeft}
            completedRoomValidator="left"
          />
          <CompletedRoomCard
            cardData={completedRoomDataRight}
            completedRoomValidator="right"
          />
        </div>
        {/* victory image */}
        <div className="w-full flex justify-between mt-10">
          <div>
            <img src="/admin/room-management/victory.png" className="w-full" />
          </div>
          <div>
            <img src="/admin/room-management/victory.png" className="w-full" />
          </div>
        </div>
        {/* button */}
        <div className="flex justify-center my-10">
          <Button onclick={() => {}}> Select the Winner</Button>
        </div>
        {/* playser section */}
        <div className="h-auto w-full flex justify-between">
          <div className=" ml-[108px]">
            <span className="text-[22px] font-semibold text-[#B05BDB]">
              Creator/player1
            </span>
          </div>
          <div className=" mr-[108px]">
            <span className="text-[22px] font-semibold text-[#B05BDB]">
              Player2
            </span>
          </div>
        </div>
        {/* button */}
        <div className="flex justify-center my-10">
          <Button onclick={() => {}}> Confirm the payment</Button>
        </div>
      </div>
    </div>
  );
};

export default RoomManagement;
