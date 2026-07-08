import { useEffect, useState } from "react";

const DEBOUNCE_DELAY = 500;

const useDebounce = (value: string, delay = DEBOUNCE_DELAY): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
