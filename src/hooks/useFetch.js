import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doFetch = async (url) => {
      setResponse(null);
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (!res.ok) {
          setError(json.error);
        } else {
          setResponse(json);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    doFetch(url);
  }, [url]);
  return { response, loading, error };
};
