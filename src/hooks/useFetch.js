import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doFetch = async (url) => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    doFetch(url);
  }, [url]);
  return { response, loading };
};
