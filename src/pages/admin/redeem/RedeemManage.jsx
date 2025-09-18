import { useEffect, useState } from "react";
import useGetData from "../../../hooks/getData.js";
import RequestTable from "./ui/RedeemTable.jsx";
import StatsGrid from "./ui/StatsGrid.jsx";

const RedeemManage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [notice, setNotice] = useState(null);

    const { getData, result: requests = [], loading, responseError } = useGetData();

    const fetchRequests = () => {
        if (status) {
            getData(`redeem/admin/pending`);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, [status]);

    const handleUpdate = (id, newStatus, success = true) => {
        setNotice({
            type: success ? "success" : "error",
            message: `Redeem request ${id} ${success ? "updated" : "failed"
                } to ${newStatus}`,
        });

        setTimeout(() => setNotice(null), 3000);

        fetchRequests();
    };

    const filteredRequests = requests.filter((req) => {
        const matchesSearch =
            searchTerm === "" ||
            req.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            req.user?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            req.user?.mobileNo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            req.redeemId?.toString().includes(searchTerm);

        return matchesSearch;
    });

    return (
        <div
            className="w-full px-[72px] pt-[65px] min-h-screen relative"
            style={{ background: "linear-gradient(to bottom, #000000, #202020)" }}
        >
            <h1 className="text-3xl font-bold text-[#7d5cff]">Redeem Management</h1>
            <p className="text-gray-400 mb-8">
                Manage redeem requests from users
            </p>

            {/* Stats */}
            <StatsGrid />

            <div className="rounded-xl shadow-lg bg-[#111] p-6">
                {/* Filters */}
                <div className="flex gap-3 my-4 flex-wrap">

                    <div className="relative w-full sm:w-1/2">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                                />
                            </svg>
                        </span>

                        <input
                            type="text"
                            placeholder="Search requests..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-[#111] pl-10 pr-4 py-2 rounded-md text-white w-full border-1"
                        />
                    </div>


                </div>

                {/* Table */}
                {loading ? (
                    <p className="text-gray-400 text-center py-6">Loading redeem requests...</p>
                ) : responseError ? (
                    <p className="text-red-400 text-center py-6">{responseError}</p>
                ) : (
                    <RequestTable
                        requests={filteredRequests}
                        onUpdate={handleUpdate}
                    />
                )}
            </div>

            {/* Notice / Toast */}
            {notice && (
                <div
                    className={`fixed bottom-5 right-5 px-4 py-3 rounded shadow-lg text-white font-semibold transition-transform transform ${notice.type === "success" ? "bg-green-600" : "bg-red-600"
                        }`}
                >
                    {notice.message}
                </div>
            )}
        </div>
    );
};

export default RedeemManage;
