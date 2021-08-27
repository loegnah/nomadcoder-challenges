import { useEffect, useState } from "react";

const useKeyPress = (word) => {
  const [press, setPress] = useState(false);

  useEffect(() => {
    const handleKeypress = (event) => {
      setPress(event.key === word);
    };
    const handleKeyup = () => {
      setPress(false);
    };

    window.addEventListener("keypress", handleKeypress);
    window.addEventListener("keyup", handleKeyup);
    return () => {
      window.removeEventListener("keypress", handleKeypress);
      window.removeEventListener("keyup", handleKeyup);
    };
  }, []);

  return press;
};

export default useKeyPress;
