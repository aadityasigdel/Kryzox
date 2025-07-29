import React, { useState } from "react";
import usePostData from "../../hooks/postData";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

// auth slices
import { login } from "../../store/slices/auth.slice";
export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch=useDispatch();
  let { postData, result, responseError, loading } = usePostData();
  useEffect(() => {
    if (result?.success) {
      responseError = undefined;
      toast.success(result?.message || "Login successful");
      dispatch(login());
    }
    if (responseError) {
      toast.error(responseError?.response?.data?.message || "Failed to login");
    }
  }, [responseError, result, router]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loginHandler = async () => {
    e.preventDefault();
    await postData("/auth/login", formData);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <form className="space-y-5" onSubmit={loginHandler}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleInput}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleInput}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {loading ? "loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
