import React, { useEffect, memo } from "react";

const Item = memo(({ name }) => {
  useEffect(() => {
    console.log("render Item");
  });
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
});

export default Item;
