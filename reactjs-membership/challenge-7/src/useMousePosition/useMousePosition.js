import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMousemove = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener("mousemove", handleMousemove);
    return () => {
      window.removeEventListener("mousemove", handleMousemove);
    };
  });

  return { x, y };
};

export default useMousePosition;
