import React, { useState, useRef } from "react";

const Focus = () => {
  const [text, setText] = useState("Name");
  const inputRef = useRef();

  const handleFocus = (e) => {
    e.preventDefault();
    const input = inputRef.current;

    // input.value = "buena loco";
    // const input = document.getElementById("focus");
    // console.log(input);
    input.focus();
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="focus"
          // id="focus"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleFocus}>Focus</button>
      </form>
    </>
  );
};

export default Focus;
