import React, { useState, useEffect } from "react";
import { makeRequest } from "../makeRequests";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = async <T>() => {
    try {
      setLoading(true);
      const res = await makeRequest.get(url);
    
        setData(res.data.data);
      
    } catch (e: any) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
