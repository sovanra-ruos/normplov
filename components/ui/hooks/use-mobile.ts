// src/components/hooks/use-mobile.ts
import { useState, useEffect } from "react";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width threshold as needed
    };

    // Check on initial render
    checkIsMobile();

    // Listen for window resize events
    window.addEventListener("resize", checkIsMobile);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return isMobile;
};

export { useIsMobile };
