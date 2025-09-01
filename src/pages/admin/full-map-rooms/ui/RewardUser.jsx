import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetData from "../../../../hooks/getData.js";
import usePostData from "../../../../hooks/postData.js";

export default function ApprovedUsers() {
    const { fullmapId } = useParams();
    const { getData, result, loading, responseError } = useGetData();
    const { postData, loading: postLoading, error: postError } = usePostData();
    const [selectedUsers, setSelectedUsers] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        if (fullmapId) {
            getData(`/fullmapApp/fullmap/${fullmapId}?status=CREATOR_APPROVED`);
        }
    }, [fullmapId]);

    const users = Array.isArray(result)
        ? Array.from(
              new Map(
                  result.map((entry) => [
                      entry.userId.id,
                      {
                          id: entry.userId.id,
                          name:
                              entry.userId.name ||
                              entry.fullMap.user?.name ||
                              `User ${entry.userId.id}`,
                      },
                  ])
              ).values()
          )
        : [];

    const toggleUser = (id) => {
        setSelectedUsers((prev) =>
            prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
        );
    };

    const handleReward = async () => {
        if (!selectedUsers.length) return;

        try {
            await postData(`fullmap/${fullmapId}/winners`, selectedUsers);

            nav(`/admin/full-map-rooms/results/rewards/${fullmapId}`, {
                state: { selectedUsers },
            });
        } catch (err) {
            console.error("Error rewarding users:", err);
        }
    };

    return (
        <div className="p-6 text-white flex flex-col gap-6 h-full">

            {loading && <p className="text-gray-400">Loading users...</p>}
            {responseError && <p className="text-red-400">{responseError}</p>}

            {users.length === 0 && !loading && !responseError && (
                <p className="text-gray-400">No users found.</p>
            )}

            <div className="max-h-96 overflow-y-auto">
                <ul className="space-y-3">
                    {users.map((user) => (
                        <li
                            key={user.id}
                            className="bg-gray-900/70 flex justify-between items-center border border-gray-700 rounded-lg p-4 shadow-md hover:bg-gray-800 transition"
                        >
                            <div className="flex items-center gap-x-4">
                                <span className="text-purple-400 font-semibold text-lg">
                                    {user.id}.
                                </span>
                                <span className="text-gray-400 font-medium">
                                    Name:
                                </span>
                                <span className="text-teal-400 font-semibold text-lg">
                                    {user.name}
                                </span>
                            </div>
                            <input
                                type="checkbox"
                                checked={selectedUsers.includes(user.id)}
                                onChange={() => toggleUser(user.id)}
                                className="h-5 w-5 text-teal-400 accent-teal-400"
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <button
                onClick={handleReward}
                disabled={postLoading || !selectedUsers.length}
                className="bg-teal-500 hover:bg-teal-600 transition text-white font-semibold py-2 px-4 rounded shadow disabled:opacity-50"
            >
                {postLoading ? "Rewarding..." : "Reward Selected Users"}
            </button>

            {postError && (
                <p className="text-red-400 mt-2">{postError.message}</p>
            )}
        </div>
    );
}
