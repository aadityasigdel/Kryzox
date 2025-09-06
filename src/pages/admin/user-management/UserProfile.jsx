import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetData from "../../../hooks/getData.js";
import NoProfile from "../../../assets/Profile/NoProfile.jpg";
import UserImage from "./ui/UserImage.jsx";

export default function UserProfile() {
    const { id } = useParams();
    const { getData, result, loading, responseError } = useGetData();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (id) getData(`users/${id}`);
    }, [id, getData]);

    useEffect(() => {
        if (result && Object.keys(result).length > 0) {
            setUser(result);
        }
    }, [result]);

    return (
        <section className="w-full min-h-screen px-8 py-16 bg-gradient-to-b from-black to-gray-900 flex justify-center">
            {/* Error */}
            {responseError && (
                <p className="text-red-500 p-4 text-center">{responseError}</p>
            )}

            {/* Skeleton Loader */}
            {!user && loading && (
                <div className="w-full max-w-4xl bg-[#111] rounded-3xl p-10 animate-pulse">
                    <div className="flex flex-col items-center space-y-6">
                        <div className="w-40 h-40 rounded-full bg-gray-700"></div>
                        <div className="h-8 w-3/4 bg-gray-700 rounded"></div>
                        <div className="space-y-2 w-full">
                            <div className="h-4 bg-gray-700 rounded w-full"></div>
                            <div className="h-4 bg-gray-700 rounded w-full"></div>
                            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            )}

            {/* User Not Found */}
            {!user && !loading && !responseError && (
                <p className="text-gray-400 p-4 text-center text-lg">
                    User not found.
                </p>
            )}

            {/* User Profile */}
            {user && (
                <div className="w-full max-w-4xl bg-[#111] rounded-3xl shadow-xl p-10 flex flex-col space-y-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                        {user.imageName ? (
                             <UserImage
                                        imagename={user.imageName}
                                        alt={user.name}
                                         size={160}
                                    />
                        ) : (
                            <img
                                src={NoProfile} 
                                alt="Default Profile"
                                className="w-40 h-40 rounded-full object-cover border-4 border-[#B05BDB]"
                            />
                        )}

                        <div className="flex flex-col space-y-2 text-center md:text-left">
                            <h1 className="text-4xl font-bold text-[#B05BDB]">
                                {user.name || "N/A"}
                            </h1>
                            <p className="text-[#80FFDB]">
                                {user.email || "N/A"}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                        {[
                            { label: "Mobile", value: user.mobileNo },
                            { label: "Balance", value: user.balance },
                            { label: "PU ID", value: user.puId },
                            { label: "FU ID", value: user.fuId },
                            {
                                label: "Roles",
                                value: user.roles
                                    ?.map((r) => r.name)
                                    .join(", "),
                            },
                            { label: "Remark", value: user.uremark },
                        ].map((field, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col bg-[#1a1a1a] rounded-xl p-4 break-words "
                            >
                                <span className="text-purple-400 font-semibold mb-1">
                                    {field.label}
                                </span>
                                <span className="text-[#80FFDB]">
                                    {field.value || "N/A"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
