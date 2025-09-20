import RoomDetailReward from "./ui/RoomDetailReward";

const RoomRewards = () => {
    return (
        <div className="p-6 bg-[#202020] text-white rounded-xl shadow-md h-full">
            <h2 className="text-xl font-semibold mb-6 text-[#80FFDB]">
                Room Rewards
            </h2>

            <RoomDetailReward />
        </div>
    );
};

export default RoomRewards;
