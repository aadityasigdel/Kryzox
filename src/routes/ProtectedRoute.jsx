import React from "react";
import { useReducer } from "react";
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useReducer((state) => state.auth);
  return (
    <div>
      {isLoggedIn ? (
        <children />
      ) : (
        <div>you need to logged in before access this service</div>
      )}
    </div>
  );
};

export default ProtectedRoute;
