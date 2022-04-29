# My Notes

## useFetch using Promises

```
export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doFetch = async (url) => {
      setResponse(null);
      setLoading(true);
      setError(null);
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((resolve) => {
          if (resolve.error) {
            setError(resolve.error);
          } else {
            setResponse(resolve);
          }
        })
        .finally(() => setLoading(false));
    };
    doFetch(url);
  }, [url]);
  return { response, loading, error };
};

```
