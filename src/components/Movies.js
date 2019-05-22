import React from 'react';
import { movies } from '../data';

const makeGenresList = genres => {
  return genres.map((genre, idx) => {
    return <li key={idx}>{genre}</li>
  })
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, idx) => {
          return (
            <div key={idx}>
              <p>{movie.title} {movie.time}</p>
              <ul>
                {makeGenresList(movie.genres)}
              </ul>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
