import React, { useState, useEffect, useMemo } from "react";

import {
  Focus,
  CopyApp,
  MediaPlayer,
  ScrollAnimation,
  Loading,
  List,
} from "./components";

const App = () => {
  const [users, setUsers] = useState([{ name: "Alberto" }, { name: "Camilo" }]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState();

  const handleAdd = () => {
    const newUser = { name: text };
    setUsers([...users, newUser]);
    setText("");
  };

  const handleSearch = () => setSearch(text);

  const filteredUsers = useMemo(
    () => users.filter((user) => user.name.includes(search)),
    [search, users]
  );

  // const filteredUsers = users.filter((user) =>user.name.includes(search));

  useEffect(() => {
    console.log("Render App");
  });
  return (
    <div>
      {/* <Focus /> */}
      {/* <CopyApp /> */}
      {/* <MediaPlayer /> */}
      {/* <ScrollAnimation /> */}
      {/* <Loading /> */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Send</button>
      <button onClick={handleSearch}>Search</button>
      <List users={filteredUsers} />
    </div>
  );
};

export default App;
