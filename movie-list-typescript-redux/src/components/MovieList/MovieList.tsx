import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.styles.scss';

const MovieList: React.FC = () => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div className='movie-list'>
      <h1 className='movie-list-title'>Movies</h1>
      <ul>
        {arr.map((item) => (
          <li>
            <MovieItem />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
