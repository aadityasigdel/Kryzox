"use client";
import useAxios from "@/lib/axios.config";
import { useState } from "react";
const useUpdateData = () => {
  const [result, setResult] = useState([]);
  const [responseError, setResponseError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(null);
  const axiosInstance = useAxios();
  const updateData = async (url, updateData) => {
    try {
      setLoading(true);
      setResponseError(null);
      const res = await axiosInstance.put(url, updateData);
      setStatusCode(res.status);
      setResult(res.data);
    } catch (error) {
      setResponseError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return {
    updateData,
    result,
    responseError,
    setResponseError,
    loading,
    statusCode,
  };
};
export default useUpdateData;
