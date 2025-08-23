import { useEffect, useState } from "react";
import useGetData from "../../../../hooks/getData.js";
import Button from "../../ui/shared/Button";

export default function PendingRoomList() {
    const TabNav = ["Pending", "Approved", "Rejected"];
    const [selectedTab, setSelectedTab] = useState(TabNav[0]);

    
    return (
        <div>
            {/* Tabs */}
            <div className="flex gap-10 mb-10">
                {TabNav.map((item, index) => (
                    <div key={index} onClick={() => setSelectedTab(item)}>
                        {selectedTab === item ? (
                            <Button>{item}</Button>
                        ) : (
                            <span className="cursor-pointer text-gray-400 hover:text-white">
                                {item}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* Loading & Error */}
            {loading && <p>Loading...</p>}
            {responseError && <p className="text-red-500">{responseError}</p>}

            {/* Data List */}
            <div>
                {result.length > 0
                    ? result.map((room) => (
                          <div
                              key={room.id}
                              className="p-4 bg-gray-800 rounded-lg mb-2 text-white"
                          >
                              <p>{room.roomName}</p>
                              <p className="text-sm text-gray-400">
                                  {room.game}
                              </p>
                          </div>
                      ))
                    : !loading && <p>No rooms found</p>}
            </div>
        </div>
    );
}
