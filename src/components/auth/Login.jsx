import React, { useState, useEffect } from "react";
import usePostData from "../../hooks/postData";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { login, setRole,setLoggedData } from "../../store/slices/auth.slice";
import { useNavigate } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postData, result, responseError, loading, statusCode } =
    usePostData();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    console.log({responseError})
    if (statusCode === 200) {
      localStorage.setItem("token", JSON.stringify("Sandip " + result?.token));
      dispatch(login());
      if (result?.user?.roles[0]?.name === "ROLE_ADMIN") {
        dispatch(setRole({ role: "ROLE_ADMIN" }));
      }
      setIsSuccess(true);
      const timer = setTimeout(() => {
        setIsSuccess(false);
        dispatch(setLoggedData(result?.user));
        navigate("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
    if (responseError) {
      console.log("responseerror occured")
      toast.error(responseError|| "Failed to login");
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
    <div className="">
      <NavBar />
      <div className="w-full min-h-screen bg-[#241B3A] flex items-center justify-center py-16 px-4 mt-[80px]">
        <div className="w-full max-w-2xl bg-[#241B3A] p-10 rounded-3xl shadow-lg border border-purple-500/20 space-y-6">
          {/* Heading */}
          <h2
            className="text-2xl font-semibold pb-2 md:text-4xl md:text-left text-center"
            style={{
              background: "linear-gradient(45deg, #c84de5, #79a5d5, #5e41a1)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Login to Your Account
          </h2>
          <p className="text-[14px] inline text-[#d9cbcb] md:text-[20px] md:text-left text-center">
            Enter your credentials to access your account and join the action.
          </p>

          {/* Success Message */}
          {isSuccess && (
            <p className="text-center text-lg font-semibold text-green-400 mt-4">
              ✅ Login successful!
            </p>
          )}

          {/* Form */}
          <form className="space-y-6 mt-5" onSubmit={loginHandler}>
            {/* Email */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-purple-200 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="username"
                placeholder="you@example.com"
                onChange={handleInput}
                required
                className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-purple-200 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                onChange={handleInput}
                required
                className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-white font-semibold rounded-xl shadow-lg transition-all duration-500 bg-[length:200%_100%] hover:bg-[position:100%_0]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #c84de5, #79a5d5, #5e41a1)",
              }}
            >
              {loading ? <ClipLoader size={20} color="#fff" /> : "Login"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
