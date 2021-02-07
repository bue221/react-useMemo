import React, { useRef, useState } from "react";
import Card from "./Card";

const Loading = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "show"}</button>
      {/* <h1>Loading</h1> */}
      {show && <Card />}
    </div>
  );
};

export default Loading;
