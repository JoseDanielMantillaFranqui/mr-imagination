import { useEffect, useState } from 'react';

const useDeviceType = () => {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
    setIsLaptop(!isMobile);
  }, []);

  return isLaptop;
};

export default useDeviceType;
