import { useEffect } from "react";

const useTop = function () {
  useEffect(() => {
    console.log("rtriggered");
    window.scrollTo(0, 0);
  }, []);
};

export default useTop;
