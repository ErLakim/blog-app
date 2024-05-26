import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';


const useFetch = (url,dataKey) => {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchQuery = async () => {
      try {
        setError("");
        setLoading(true);
        const response = await axios.get(url,{ signal });
        console.log('Fetched Data:',response.data);
        setData(response.data?.[dataKey] || []);
       
      } catch (e) {
        setError(e);
      } finally{
        setLoading(false);
      }
    };

    fetchQuery();
    return () => {
      controller.abort();
    };

    
  }, [url,dataKey]);

  return {data,error,loading};
};

export default useFetch;