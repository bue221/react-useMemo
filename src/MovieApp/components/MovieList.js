import React from "react";
import { Container } from "@material-ui/core";

import Movie from "./Movie";
import InitialMovies from "../Data/InitialMovies";

const MovieList = () => {
  return (
    <Container
      maxWidth="md"
      style={{
        display: "flex",
        gap: "1rem",
        padding: "2rem 0",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {InitialMovies.map((i) => (
        <Movie {...i} />
      ))}
    </Container>
  );
};

export default MovieList;
