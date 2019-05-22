import React from 'react';
import { directors } from '../data';

const makeMoviesList = movies => {
  return movies.map((movie, idy) => {
    return <li key={idy}>{movie}</li>
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, idx) => {
        return <div key={idx}>
          <p>{director.name}</p>
          <ul>{makeMoviesList(director.movies)}</ul>
        </div>
      })}
    </div>
  );
}

export default Directors
