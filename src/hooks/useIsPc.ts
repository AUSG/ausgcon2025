import { useEffect, useState } from "react";

export const useIsPc = () => {
  const [isPc, setIsPc] = useState(
    typeof window !== "undefined" ? window.innerWidth > 1024 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsPc(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isPc;
};
