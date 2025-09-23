import React from "react";

const activities = [
    {
        title: "New tournament created",
        game: "Pubg Mobile",
        activeTime: "2 mins ago",
    },
    { title: "User joined", game: "Gamer_002", activeTime: "4 mins ago" },
    { title: "Room completed", game: "Free fire", activeTime: "8 mins ago" },
    { title: "Top-up processed", game: "$54", activeTime: "10 mins ago" },
    {
        title: "Tournament ended",
        game: "Pubg Mobile",
        activeTime: "13 mins ago",
    },
];

const RecentActivities = () => {
    return (
        <div
            className="h-[363px] w-[470px] border flex flex-col rounded-md"
            style={{
                backgroundImage: "linear-gradient(to bottom,#000000,#202020)",
            }}
        >
            {/* Header */}
            <div className="flex justify-between px-4 pt-4">
                <h1 className="font-semibold text-[#80FFDB]">
                    Recent Activities
                </h1>
                <p className="text-[10px] text-[#4D8ACA] font-semibold cursor-pointer">
                    View All
                </p>
            </div>

            {/* Activity List */}
            <div className="flex-1 flex flex-col justify-around items-center mt-4 mb-3">
                {activities.map((item, index) => (
                    <div
                        key={index}
                        className="h-[48px] w-[421px] bg-[#202020] rounded-sm flex justify-between items-center px-2"
                    >
                        <section className="flex gap-3 items-center">
                            <div className="h-2 w-2 rounded-full bg-[#4D8ACA]"></div>
                            <div>
                                <h2 className="text-[14px] text-[#80FFDB]">
                                    {item.title}
                                </h2>
                                <p className="text-[12px] text-[#B05BDB]">
                                    {item.game}
                                </p>
                            </div>
                        </section>
                        <p className="text-[12px] text-[#B05BDB]">
                            {item.activeTime}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivities;
