import { useState } from "react";

const useLockScroll = () => {
  const [isLocked, setIsLocked] = useState(false);

  const lockScroll = () => {
    document.body.style.overflow = "hidden";
    setIsLocked(true);
  };
  const unLockScroll = () => {
    document.body.style.overflow = "scroll";
    setIsLocked(false);
  };

  return [isLocked, { lockScroll, unLockScroll }];
};

export default useLockScroll;
