import { useState, useEffect } from 'react';

function useFetch<T>(url: string): T | null {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  return data;
}

export default useFetch;