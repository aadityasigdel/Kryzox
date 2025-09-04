"use client";
import useAxios from "../lib/axios.config";
import { useState } from "react";
const useGetData = () => {
  const [result, setResult] = useState([]);
  const [responseError, setResponseError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorCode, setErrorCode] = useState();
  const [statusCode, setStatusCode] = useState(null);
  const axiosInstance = useAxios();
  const getData = async (url) => {
    try {
      setLoading(true);
      setResponseError(null);
      const res = await axiosInstance.get(url);
      setStatusCode(res.status);
      setResult(res.data);
    } catch (error) {
      console.log({ error });
      setResponseError(error.response?.data?.message || "Something went wrong");
      setErrorCode(error.status);
    } finally {
      setLoading(false);
    }
  };
  return {
    getData,
    result,
    responseError,
    setResponseError,
    loading,
    errorCode,
    statusCode,
  };
};
export default useGetData;
