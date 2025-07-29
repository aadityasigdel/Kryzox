"use client";
import useAxios from "@/lib/axios.config";
import { useEffect, useState } from "react";
const useUpdateData = () => {
  const [result, setResult] = useState([]);
  const [responseError, setResponseError] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const axiosInstance=useAxios();
  const updateData = async (url, updateData) => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.patch(url, updateData);
      setResult(data);
    } catch (error) {
      setResponseError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return { updateData, result, responseError, loading };
}; 
export default useUpdateData;