import { useEffect, useState } from 'react';
import { fetchDataFromAPI } from '../utils/tmdbapi';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading('Loading...');
    setData(null);
    setError(null);

    fetchDataFromAPI(url)
      .then((response) => {
        setLoading(false);
        setData(response);
      })
      .catch((error) => {
        setLoading(false);
        setError('Something went wrong!');
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
