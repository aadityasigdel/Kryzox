import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/auth.slice";
import useGetData from "../../hooks/getData";
import toast from "react-hot-toast";
import {ClipLoader} from "react-spinners";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getData, result, responseError, loading } = useGetData();
  useEffect(() => {
    if (result?.success) {
      dispatch(logout());
      navigate("/login");
    }
    if (responseError) {
      console.error("Logout failed:", responseError);
      toast.error(responseError.response?.data?.message || "Failed to logout");
    }
  }, [result, responseError]);
  const handleLogout = async () => {
    await getData("/auth/logout");
    localStorage.removeItem("token");
  };
  return (
    <button
      className="bg-red-500 text-white h-10 w-24 rounded-lg hover:bg-red-600 transition duration-300"
      onClick={handleLogout}
      disabled={loading}
    >
      {loading ? <ClipLoader size={20} color="#fff"/> : "logout" }
    </button>
  );
};

export default Logout;
