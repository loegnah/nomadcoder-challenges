import { useState, useEffect } from "react";

const useDeviceOrientation = () => {
  const [alpha, setAlpha] = useState(null);
  const [beta, setBeta] = useState(null);
  const [gamma, setGamma] = useState(null);
  const handleOrientaion = (event) => {
    setAlpha(event.alpha);
    setBeta(event.beta);
    setGamma(event.gamma);
  };
  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientaion);
  });

  return { alpha, beta, gamma };
};

export default useDeviceOrientation;
