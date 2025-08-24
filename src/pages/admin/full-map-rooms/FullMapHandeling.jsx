import { useState } from "react";
import ApproveList from "./ui/ApproveList";
import FullMapDetails from "./ui/FullMapDetails";


export default function FullMapHandeling() {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [error, setError] = useState(null);



    const handleApprove = (id) => {
        setRooms((prev) =>
            prev.map((room) =>
                room.id === id ? { ...room, status: "Approved" } : room
            )
        );
    };

    const handleReject = (id) => {
        setRooms((prev) =>
            prev.map((room) =>
                room.id === id ? { ...room, status: "Rejected" } : room
            )
        );
    };

    if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 h-screen ">
            <div className=" border border-white/20 rounded-xl p-6 shadow-lg flex flex-col justify-start text-white  bg-black/70 ">
                <h1 className="text-4xl font-bold bg-gradient-to-br from-teal-300 to-purple-500 bg-clip-text text-transparent  mb-4">
                    Room Details
                </h1>

                <FullMapDetails  />
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg text-white overflow-y-auto">
                <h2 className="text-4xl absul  font-bold bg-gradient-to-br from-teal-300 to-purple-500 bg-clip-text text-transparent  ">
                    Approval List
                </h2>
                <div>
                    <ApproveList />
                </div>
            </div>
        </div>
    );
}
