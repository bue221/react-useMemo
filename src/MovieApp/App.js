import React, { useState } from "react";
import "./App.css";

import { MovieList, Navbar } from "./components";
import UserContext from "./Context/UserContext";

const App = () => {
  const initialUser = {
    id: 1,
    name: "Andres",
    favoriteMovies: [1, 2, 3],
  };

  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };

  const data = { user, login, logout };

  return (
    <div>
      <UserContext.Provider value={data}>
        <Navbar />
        <MovieList />
      </UserContext.Provider>
    </div>
  );
};

export default App;
