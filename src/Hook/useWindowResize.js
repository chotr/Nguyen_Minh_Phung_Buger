import React, { useState, useEffect } from "react";

export default function useWindowResize() {
  // const {size, setSize} = useState({width:window.innerWidth, height:window.innerHeight})
  const [size, setSize] = useState(() => {
    return {
      useramewidth: window.innerWidth,
      height: window.innerHeight,
    };
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    console.log(innerWidth, innerHeight);
    setSize({
      width: innerWidth,
      height: innerHeight,
    });
  };
  //custom hook sẽ returrn về data thay vì
  // return (
  //     [size.width, size.height]
  // )

  return {width: size.width, height: size.height};
}
