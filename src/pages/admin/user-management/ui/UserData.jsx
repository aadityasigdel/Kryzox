import { useState, useMemo } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const UserTable = ({ users = [] }) => {
    const nav = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [openMenuUserId, setOpenMenuUserId] = useState(null);

    const toggleMenu = (userId) => {
        setOpenMenuUserId(openMenuUserId === userId ? null : userId);
    };

    const filteredUsers = useMemo(() => {
        if (!searchQuery) return users;
        return users.filter(
            (user) =>
                user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.mobileNo.toString().includes(searchQuery)
        );
    }, [searchQuery, users]);

    return (
        <div
            className="h-[493px] rounded-tl-2xl rounded-tr-2xl mb-20"
            style={{
                background: "linear-gradient(to bottom, #000000, #202020)",
            }}
        >
            {/* Search */}
            <div
                className="sticky top-0 z-20 h-[110px] w-full flex justify-between items-center px-9"
                style={{
                    borderRadius: "6.61px",
                    background: "linear-gradient(to bottom, #000000, #202020)",
                }}
            >
                <div className="relative flex-1 min-w-[847px] h-[58px]">
                    <img
                        src="/admin/user-management/searchIcon.png"
                        alt="Search"
                        className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none z-10"
                    />
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="absolute inset-0 w-full h-full text-white placeholder:text-white pl-16 pr-4"
                        style={{
                            borderRadius: "6.61px",
                            background:
                                "linear-gradient(to top, #000000, #202020)",
                        }}
                    />
                </div>
                <button className="flex items-center justify-center w-12 h-12 p-2 ml-4 hover:bg-gray-700 rounded-md transition-colors">
                    <img
                        src="/admin/user-management/filter.png"
                        alt="Filter"
                        className="w-full h-full object-contain"
                    />
                </button>
            </div>

            {/*  table */}
            <div className="overflow-y-auto max-h-[380px]">
                <table className="min-w-full border-collapse">
                    <thead className="text-white border-b border-purple-500 text-2xl font-extrabold sticky top-0 bg-[#000]">
                        <tr>
                            <th className="py-3 px-4 text-left">User</th>
                            <th className="py-3 px-4 text-left">Mobile</th>
                            <th className="py-3 px-4 text-left">Balance</th>
                            <th className="py-3 px-4 text-left">Roles</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#fff]">
                        {filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td className="py-4 px-4">
                                    <span className="text-[#0DBDB1] font-extrabold text-2xl">
                                        {user.name}
                                    </span>
                                    <br />
                                    <span className="font-bold text-purple-500">
                                        {user.email}
                                    </span>
                                </td>
                                <td className="py-4 px-4">{user.mobileNo}</td>
                                <td className="py-4 px-4">{user.balance}</td>
                                <td className="py-4 px-4">
                                    {user.roles.map((r) => r.name).join(", ")}
                                </td>
                                <td className="py-4 px-4 text-sm relative">
                                    <button
                                        onClick={() => toggleMenu(user.id)}
                                        className="p-2 rounded-md hover:bg-gray-700"
                                    >
                                        <PiDotsThreeVerticalBold className="text-xl" />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {openMenuUserId === user.id && (
                                        <div className="absolute right-0 mt-2 w-40 bg-[#111] border border-gray-700 rounded-lg shadow-lg z-20">
                                            <button
                                                className="w-full text-left px-4 py-2 hover:bg-gray-700"
                                                onClick={() =>
                                                    nav(
                                                        `users/${user.id}/profile`
                                                    )
                                                }
                                            >
                                                Show Profile
                                            </button>
                                            <button
                                                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-700"
                                                onClick={() =>
                                                    nav(`users/${user.id}/ban`)
                                                }
                                            >
                                                Ban User
                                            </button>
                                            <button
                                                className="w-full text-left px-4 py-2 hover:bg-gray-700"
                                                onClick={() =>
                                                    nav(
                                                        `/users/${user.id}/change-role`
                                                    )
                                                }
                                            >
                                                Change Role
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {filteredUsers.length === 0 && (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="text-center text-gray-400 py-4"
                                >
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;
