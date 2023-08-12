import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        const response = await axios.get(endpoint);
        setData(response.data);
    };

    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    });

    return {
        data,
        error
    }
};

export default useFetch;