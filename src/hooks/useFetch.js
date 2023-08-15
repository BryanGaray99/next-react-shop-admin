import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [setError] = useState('');
  const [setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(endpoint);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useFetch;
