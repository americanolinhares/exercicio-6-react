import React, { useState, useEffect, Fragment } from "react";
import { MoviesService } from "../services/MoviesService";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

export const Movie = (props) => {
  const [movie, setMovie] = useState({});

  const requestMovie = async (movieId) => {
    const moviesResult = await MoviesService.getPopularMovieDetails(movieId);

    setMovie(moviesResult.data);
  };

  useEffect(() => {
    requestMovie(props.match.params.id);
  }, [props.match.params.id]);

  const TableHead = () => {
    return (
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Site</th>
          <th>Lançamento</th>
          <th>Voltar</th>
        </tr>
      </thead>
    );
  };

  return (
    <Fragment>
      <div className="container mb-10">
        <h1>Exercicio 3 - Filmes</h1>
        <table className="highlight">
          <TableHead />
          <tr>
            <td>{movie.title}</td>
            <td>{movie.homepage}</td>
            <td>{movie.release_date}</td>
            <td style={{ cursor: "pointer" }}>
              <Link to={"/"}>Voltar</Link>
            </td>
          </tr>
        </table>
      </div>
    </Fragment>
  );
};
