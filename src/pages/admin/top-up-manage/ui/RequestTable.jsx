import React from "react";
import RequestRow from "./RequestRow";

const RequestTable = ({ requests, onUpdate }) => {
    return (
 


            <table className="w-full text-left text-white border-separate border-spacing-y-2">
                <thead className="text-gray-400">
                    <tr>
                        <th className="px-4 py-2">Request ID</th>
                        <th className="px-4 py-2">Game</th>
                        <th className="px-4 py-2">Amount</th>
                        <th className="px-4 py-2">Payment</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">User</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.length > 0 ? (
                        requests.map((r) => (
                            <RequestRow key={r.id} request={r} onUpdate={onUpdate} />
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="7"
                                className="text-center py-6 text-gray-500 italic"
                            >
                                No requests found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        
    );
};

export default RequestTable;
