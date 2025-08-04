"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, setRole } from "../store/slices/auth.slice";
const useAxios = ({ errorMessage } = {}) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        config.headers["Authorization"] = token;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const { status } = error.response;
      if (status === 401) {
        toast.error(
          errorMessage
            ? errorMessage
            : "session expires, please login to access"
        );
        localStorage.removeItem("token");
        dispatch(logout());
        dispatch(setRole({ role: "ROLE_NORMAL" }));
        setTimeout(() => {
          navigate("/auth/login", { replace: true });
        }, 500);
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default useAxios;
