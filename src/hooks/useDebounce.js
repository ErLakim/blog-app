import { useState, useEffect } from 'react';

const useDebounce = (search, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(search);
    }, delay);

    return () => clearTimeout(timer);
  }, [search, delay]);

  return debouncedValue;
};

export default useDebounce;
