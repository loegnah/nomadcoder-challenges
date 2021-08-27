import { useState } from "react";

const useLocalStorage = (name, initialValue) => {
  const [currentLS, setCurrentLS] = useState(initialValue);

  const setLS = (newValue) => {
    localStorage.setItem(name, newValue);
    setCurrentLS(localStorage.getItem(name));
  };

  return [currentLS, setLS];
};

export default useLocalStorage;
