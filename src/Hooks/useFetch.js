import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(json => setData(json))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}