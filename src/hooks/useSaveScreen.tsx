import { useState, useEffect } from "react";

const useSaveScreen = (key: string, initialValue: string) => {
  const getValueFromLocalStorage = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  };

  const [value, setValue] = useState(getValueFromLocalStorage);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useSaveScreen;
