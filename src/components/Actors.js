import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, idx) => {
        return (
          <div key={idx}>
            <p>{actor.name}</p>
            <ul>
              {actor.movies.map((movie, idy) => {
                return <li key={idy}>{movie}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
