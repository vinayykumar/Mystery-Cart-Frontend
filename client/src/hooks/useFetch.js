import { useEffect, useState } from "react";
import fetchData from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; 

        const fetchDataAsync = async () => {
            setLoading(true);
            try {
                const res = await fetchData(endpoint);
                if (isMounted) {
                    setData(res);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchDataAsync();

        return () => {
            isMounted = false; 
        };
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetch;
