"use client"
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const useAxiosMultipart=({errorMessage})=>{
    const BASE_URL=import.meta.env.VITE_BASE_URL;
  const navigate=useNavigate
const axiosInstance = axios.create({
  baseURL: BASE_URL, 
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  response=>response,
  error=>{
    const {status}=error.response;
    if(status===401) {
      toast.error(errorMessage ?errorMessage : "session expires, please login to access");
    navigate("/");
    }
    return Promise.reject(error);
  }
  )
  return axiosInstance;
}


export default useAxiosMultipart;