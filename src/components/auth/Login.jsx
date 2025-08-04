import React, { useState, useEffect } from "react";
import usePostData from "../../hooks/postData";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { login,setRole } from "../../store/slices/auth.slice";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postData, result, responseError, loading, statusCode } =
    usePostData();

  useEffect(() => {
    console.log({statusCodeFromLogin:statusCode});
    if (statusCode === 200) {
      toast.success(result?.message || "Login successful");
      localStorage.setItem("token", JSON.stringify("Bearer "+result?.token));
      dispatch(login());
      if(result?.user?.roles[0]?.name === "ROLE_ADMIN") {
        dispatch(setRole({ role: "ROLE_ADMIN" }));
      }
    }
    if (responseError) {
      toast.error(responseError?.response?.data?.message || "Failed to login");
    }
  }, [responseError, result]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    await postData("/auth/login", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-2xl text-white space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-400">
          Login to Your Account
        </h2>

        <form className="space-y-5" onSubmit={loginHandler}>
          <div>
            <label htmlFor="username" className="block mb-1 text-sm text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              name="username"
              placeholder="you@example.com"
              onChange={handleInput}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              onChange={handleInput}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-semibold text-white"
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
