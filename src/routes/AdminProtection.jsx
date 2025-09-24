import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const AdminProtection = ({ children }) => {
    const navigate = useNavigate();
    const { role, isLoggedIn } = useSelector((state) => state.auth);

    if (!isLoggedIn || role !== "ROLE_ADMIN") {
        toast.error("You are not authorized to access this page");

        navigate("/", { replace: true });

        return (
            <div
                className="text-red-800 font-bold w-full h-screen grid place-items-center"
                style={{
                    background: "linear-gradient(to bottom, #000000, #202020)",
                }}
            >
                You are not authorized to access this page
            </div>
        );
    }

    return children;
};

export default AdminProtection;
