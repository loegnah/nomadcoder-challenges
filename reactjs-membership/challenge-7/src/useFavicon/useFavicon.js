import { useEffect } from "react";

const useFavicon = (initialFaviconUrl) => {
  const setFavicon = (faviconUrl) => {
    console.log(faviconUrl);
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = faviconUrl;
  };

  useEffect(() => {
    setFavicon(initialFaviconUrl);
  }, []);

  return setFavicon;
};

export default useFavicon;
