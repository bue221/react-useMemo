import React, { useState, useEffect, useMemo } from "react";

import {
  Focus,
  CopyApp,
  MediaPlayer,
  ScrollAnimation,
  Loading,
  List,
  Modal,
  useModal,
} from "./components";

const App = () => {
  // const [users, setUsers] = useState([{ name: "Alberto" }, { name: "Camilo" }]);
  // const [text, setText] = useState("");
  // const [search, setSearch] = useState();

  // const handleAdd = () => {
  //   const newUser = { name: text };
  //   setUsers([...users, newUser]);
  //   setText("");
  // };

  // const handleSearch = () => setSearch(text);

  // const filteredUsers = useMemo(
  //   () => users.filter((user) => user.name.includes(search)),
  //   [search, users]
  // );

  // const filteredUsers = users.filter((user) =>user.name.includes(search));

  // useEffect(() => {
  //   console.log("Render App");
  // })

  const [open, openModal, closeModal] = useModal();

  return (
    <div>
      {/* <Focus /> */}
      {/* <CopyApp /> */}
      {/* <MediaPlayer /> */}
      {/* <ScrollAnimation /> */}
      {/* <Loading /> */}
      {/* <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Send</button>
      <button onClick={handleSearch}>Search</button>
      <List users={filteredUsers} /> */}
      <button onClick={openModal}>{open ? "close" : "open"}</button>
      <Modal open={open} close={closeModal}>
        <h1>Buena perro</h1>
        <p>Ahora sirve el modal re bien</p>
      </Modal>
    </div>
  );
};

export default App;
