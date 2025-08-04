import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const AdminProtection = ({ children }) => {
  const navigate = useNavigate();
  const { role,isLoggedIn } = useSelector((state) => state.auth);

    console.log("Rendering AdminProtection:", { role, isLoggedIn });
  useEffect(() => {
    console.log({role,isLoggedIn});
    if (!isLoggedIn) {
      toast.error("You are not authorized to access this page");
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 500);
    }else{
      if (role !== "ROLE_ADMIN") {
        toast.error("You are not authorized to access this page");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 500);
      }
    }
  }, [role, navigate,isLoggedIn]);

  if (role !== "ROLE_ADMIN")
    return (
      <div
        className="text-red-800 font-bold w-full h-screen grid place-items-center"
        style={{
          background: "linear-gradient(to bottom, #000000, #202020)",
        }}
      >
        You are not authorized to accesss this page
      </div>
    );

  return children;
};

export default AdminProtection;
