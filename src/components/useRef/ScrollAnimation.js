import React, { useState, useEffect, useRef } from "react";

const ScrollAnimation = () => {
  const [background, setBackground] = useState("pink");
  const divRef = useRef();

  const handleScroll = () => {
    const div = divRef.current;
    const { y } = div.getBoundingClientRect();

    const backgroundColor = y <= 100 ? "orange" : "green";
    setBackground(backgroundColor);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "180vh", backgroundColor: background }} ref={divRef}>
      <h1>Scroll Animation</h1>
    </div>
  );
};

export default ScrollAnimation;
