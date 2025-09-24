import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useSelector((state) => state.auth);

    if (!isLoggedIn) {
        return (
            <div>
                You need to be logged in before accessing this service.
                <Navigate to="/auth/login" replace />
            </div>
        );
    }

    return children;
};

export default ProtectedRoute;
