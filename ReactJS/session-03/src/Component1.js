import React, { useEffect } from "react";

const Component1 = () => {
  useEffect(() => {
    return () => {
      console.log("Unmounting Component 1");
    };
  }, []);
  return <div>Component1 is not yet unmounted.</div>;
};

export default Component1;
