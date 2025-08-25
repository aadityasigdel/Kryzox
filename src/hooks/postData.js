"use client";
import { useState } from "react";
import useAxios from "../lib/axios.config";
const usePostData = () => {
<<<<<<< HEAD
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
            setResponseError(
                error.response?.data?.message || "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };
    return { postData, result, responseError, loading, statusCode };
=======
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
>>>>>>> 54a2a50fe42616cb5cc547af87a51f621c086a6e
};
export default usePostData;
