import React from "react";
import clsx from "clsx";
const CompletedRoomCard = ({ cardData,completedRoomValidator }) => {
  return (
    <div
      className={clsx("h-[230px] w-[292px] bg-[#202020] p-[22px]",completedRoomValidator==="right" && "flex flex-col justify-center")}
      style={{ borderRadius: "12px" }}
    >
      {cardData.map((item, index) => {
        return (
          <div
            key={index}
            className={clsx(
              "flex text-white justify-between",
              index === 0 && "mb-5",
            )}
          >
            <div
              className={clsx(
                index === 0 ? "text-[18px] text-[#80FFDB]" : "text-[#B05BDB]",
                "font-semibold"
              )}
            >
              {item.left}
            </div>
            <div
              className={clsx(
                "text-[#80FFDB]",
                index === 5 && "text-[#85BB65]"
              )}
            >
            {item.right}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompletedRoomCard;
