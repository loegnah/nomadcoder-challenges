import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const success = (pos) => {
      setLat(pos.coords.latitude);
      setLong(pos.coords.longitude);
    };
    const fail = (err) => {
      setError(err.message);
    };

    navigator.geolocation.getCurrentPosition(success, fail);
  }, []);

  return { coords: { lat, long }, error };
};

export default useGeolocation;
