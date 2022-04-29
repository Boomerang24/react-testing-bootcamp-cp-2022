import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const doFetch = async (url) => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
        setError(true);
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
