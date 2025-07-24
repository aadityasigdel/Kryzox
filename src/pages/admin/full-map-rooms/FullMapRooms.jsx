import { Plus } from "lucide-react";
import HeadingSection from "../ui/shared/HeadingSection";
import FullMapRoomsCard from "./ui/FullMapRoomCard";
import Button from "../ui/shared/Button";
import TabCard from "./ui/TabCard";

const cardData = [
  {
    gradientColor: { color1: "#B05BDB", color2: "#202020" },
    status: "Active",
    heading: "PUBG Mobile",
    rooms: "40 rooms",
    players: "1250 players",
  },
  {
    gradientColor: { color1: "#800080", color2: "#202020" },
    status: "Active",
    heading: "Free Fire",
    rooms: "23 rooms",
    players: "150 players",
  },
  {
    gradientColor: { color1: "#BA55D3", color2: "#202020" },
    status: "Active",
    heading: "BGMI",
    rooms: "23 rooms",
    players: "150 players",
  },
  {
    gradientColor: { color1: "#BA55D3", color2: "#202020" },
    status: "Active",
    heading: "LUDO",
    rooms: "23 rooms",
    players: "150 players",
  },
];

const TabCardData = [
  {
    left: "Morning Rush",
    right: "Completed",
  },
  {
    left: "Map:",
    right: "Erangle",
  },
  {
    left: "Game:",
    right: "PUBG Mobile",
  },
  {
    left: "Mode:",
    right: "Solo",
  },
  {
    left: "Players:",
    right: "65/100",
  },
  {
    left: "Host:",
    right: "Progamer123",
  },
  {
    left: "Prize:",
    right: "KX.500",
  },
  {
    left: "/admin/full-map-rooms/setting.png",
    right: "View Details",
  },
];
const TabNav = ["Active", "Scheduled", "Completed"];
const FullMapRooms = () => {
  return (
    <section
      className="w-full px-[72px] pt-[65px]"
      style={{
        background: "linear-gradient(to bottom, #000000, #202020)",
      }}
    >
      {/* heading section */}
      <HeadingSection
        heading={"Full Map Rooms"}
        subheading={"Manage multiplayer gaming sessions and tournaments"}
        btn1Content={"Create Room"}
        icon1={Plus}
      />
      {/* card section */}
      <div className="flex gap-10 mt-10">
        {cardData.map((item, index) => {
          return (
            <FullMapRoomsCard
              gradientColor={item.gradientColor}
              status={item.status}
              heading={item.heading}
              rooms={item.rooms}
              players={item.players}
            />
          );
        })}
      </div>
      {/* tab section */}
      <div
        className="h-[591px] w-full mt-10 p-[30px]"
        style={{
          background: "linear-gradient(to bottom, #000000, #202020)",
        }}
      >
        {/* tab links */}
        <div className="flex gap-10 mb-10">
          {TabNav.map((item, index) => {
            return (
              <div className="text-white">
                {index === 2 ? <Button>{item}</Button> : item}
              </div>
            );
          })}
        </div>
        {/* card section */}
       <div className="">
         <TabCard TabCardData={TabCardData} />
       </div>
      </div>
    </section>
  );
};

export default FullMapRooms;
