import React, { useRef, useState } from "react";

const CopyApp = () => {
  const [text, setText] = useState("");
  const [isCopy, setIsCopy] = useState(false);
  const inputRef = useRef();

  const handleCopy = () => {
    const input = inputRef.current;

    input.select();
    document.execCommand("copy");
    setIsCopy(true);

    setTimeout(() => setIsCopy(false), 2000);
  };

  return (
    <>
      <h1>Copy link app</h1>
      <input
        type="text"
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCopy}>copy</button>
      {isCopy && <h1>copied</h1>}
    </>
  );
};

export default CopyApp;
