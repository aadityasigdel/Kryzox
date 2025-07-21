import React from "react";
import clsx from "clsx";
const FullMapRoomsCard = ({
  gradientColor,
  heading,
  status = "active",
  rooms,
  players,
}) => {
  return (
    <section
      className={clsx("h-[144px] w-[228px] flex flex-col justify-between px-6 py-3")}
      style={{
        borderRadius: "12px",
        backgroundImage: `linear-gradient(to right,${gradientColor.color1},${gradientColor.color2})`,
      }}
    >
      {/* top section */}
      <div className="flex justify-between items-center">
        <div className="h-[50px] w-[50px] bg-cover">
          <img
            src={"/admin/full-map-rooms/icon2.png"}
            alt={heading}
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[12px] text-[#B05BDB] font-semibold">{status}</p>
        </div>
      </div>
      {/* middle section */}
      <div className="text-[18px] text-[#80FFDB] ">
        <h1>{heading}</h1>
      </div>
      {/* bottom section */}
      <div className="flex justify-between items-center">
        <div className="text-[12px] text-[#B05BDB]">{rooms}</div>
        <div className="text-[#B05BDB] text-[16px] font-semibold">
          {players}
        </div>
      </div>
    </section>
  );
};

export default FullMapRoomsCard;
