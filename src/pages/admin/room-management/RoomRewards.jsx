import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RoomDetails from "./ui/RoomDetails";

const RoomRewards = () => {
    return (
        <div className="p-6 bg-[#202020] text-white rounded-xl shadow-md h-full">
            <h2 className="text-xl font-semibold mb-6 text-[#80FFDB]">
                Room Rewards
            </h2>

            <RoomDetails />
        </div>
    );
};

export default RoomRewards;
