"use client";
import { useState } from "react";
import useAxios from "../lib/axios.config";
const usePostData = () => {
  const [result, setResult] = useState([]);
  const [responseError, setResponseError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(null);
  const axiosInstance = useAxios();
  const postData = async (url, formData) => {
    try {
      setLoading(true);
      const res = await axiosInstance.post(url, formData);
      console.log({ statusCode: res.status });
      setStatusCode(res.status);
      setResult(res.data);
    } catch (error) {
      console.log(error.response?.data?.message || "Something went wrong");
      setResponseError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return {
    postData,
    result,
    responseError,
    setResponseError,
    loading,
    statusCode,
  };
};
export default usePostData;
