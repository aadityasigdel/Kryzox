import React from "react";
import clsx from "clsx";

const RoomManagementCard = ({ cardData, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="h-[268px] w-[292px] bg-[#202020] p-[22px] cursor-pointer hover:bg-[#2A2A2A] transition"
            style={{ borderRadius: "12px" }}
        >
            {cardData.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={clsx(
                            "flex text-white justify-between",
                            index === 0 && "mb-5",
                            index === cardData.length - 1 && "mt-5"
                        )}
                    >
                        <div
                            className={clsx(
                                index === 0
                                    ? "text-[18px] text-[#80FFDB]"
                                    : "text-[#B05BDB]",
                                "font-semibold"
                            )}
                        >
                            {index !== cardData.length - 1 && item.left}
                            {index === cardData.length - 1 && (
                                <img
                                    src={item.left}
                                    alt="setting_image"
                                    className="w-full object-cover"
                                />
                            )}
                        </div>
                        <div
                            className={clsx(
                                "text-[#80FFDB]",
                                (index === 6 || index === 5) && "text-[#85BB65]"
                            )}
                        >
                            {index === 0 ? (
                                <button className="bg-[#B05BDB] text-[#80FFDB] text-sm rounded-4xl px-2">
                                    {item.right}
                                </button>
                            ) : index !== cardData.length - 1 ? (
                                item.right
                            ) : (
                                <img
                                    src={item.right}
                                    alt="trash"
                                    className="w-full object-cover"
                                />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RoomManagementCard;
