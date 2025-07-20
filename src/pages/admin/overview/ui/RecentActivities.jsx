import React from "react";

const RecentActivities = () => {
  const activity = [
    {
      title: "New tournament created",
      game: "Pubg Mobile",
      activeTime: "2 mins ago",
    },
    {
      title: "User joined",
      game: "Gamer_002",
      activeTime: "4 mins ago",
    },
    {
      title: "Room completed",
      game: "Free fire",
      activeTime: "8 mins ago",
    },
    {
      title: "Top-up processed",
      game: "$54",
      activeTime: "10 mins ago",
    },
    {
      title: "Tournament ended",
      game: "Pubg Mobile",
      activeTime: "13 mins ago",
    },
  ];
  return (
    <div
      className=" h-[362.88px] w-[470px] border flex flex-col rounded-md"
      style={{
        backgroundImage: "linear-gradient(to bottom,#000000,#202020)",
      }}
    >
      <div className="flex justify-between">
        <h1 className=" font-semibold text-[#80FFDB]">Recent Activities</h1>
        <p className="text-[10px] text-[#4D8ACA] font-semibold">View All</p>
      </div>
      {/* activity content section  */}
      <div className="flex flex-1 flex-col justify-around items-center mt-4 mb-3">
        {activity.map((item, index) => {
          return (
            <div
              key={index}
              className="h-[47.19px] w-[421.4px] bg-[#202020] rounded-sm flex justify-between items-center px-2"
            >
              <section className="flex gap-3 items-center">
                <div className="h-2 w-2 rounded-full bg-[#4D8ACA]"></div>
                <div>
                  <h2 className="text-[14px] text-[#80FFDB]">{item.title}</h2>
                  <p className="text-[12px] text-[#B05BDB]">{item.game}</p>
                </div>
              </section>
              <div>
                <p className="text-[12px] text-[#B05BDB]">{item.activeTime}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivities;
