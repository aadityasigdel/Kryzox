"use client";
import useAxios from "@/lib/axios.config";
import { useEffect, useState } from "react";
const useDeleteData = () => {
  const [result, setResult] = useState([]);
  const [responseError, setResponseError] = useState(null);
  const [loading, setLoading] = useState(false);
  const axiosInstance=useAxios();
  const deleteData = async (url) => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.delete(url);
      setResult(data);
    } catch (error) {
      setResponseError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return { deleteData, result, responseError, loading };
};
export default useDeleteData;