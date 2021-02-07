import React from "react";

const List = ({ users }) => {
  return (
    <div>
      {users.map((i) => (
        <h1>{i.name}</h1>
      ))}
    </div>
  );
};

export default List;
