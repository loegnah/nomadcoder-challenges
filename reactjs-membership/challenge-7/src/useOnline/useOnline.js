import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(navigator.onLine);
  const handleOnline = () => {
    setOnline(navigator.onLine);
    console.log(online);
  };
  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOnline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOnline);
    };
  }, []);
  return online;
};

export default useOnline;
