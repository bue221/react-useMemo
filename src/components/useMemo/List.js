import React, { memo, useEffect } from "react";

import Item from "./Item";

const List = memo(({ users }) => {
  useEffect(() => {
    console.log("render List");
  });

  return (
    <div>
      {users.map((i) => (
        <Item {...i} />
      ))}
    </div>
  );
});

export default List;
