import React, { useEffect } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.styles.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hook';

const MovieList: React.FC = () => {
  const movies = useAppSelector((state) => state.movies);
  console.log(movies);

  const dispatch = useAppDispatch();

  return (
    <div className='movie-list'>
      <h1 className='movie-list-title'>Movies</h1>
      <ul>
        {movies.map((item, index) => (
          <li key={index}>
            <MovieItem
              movie={item}
              // title={item.title}
              // director={item.director}
              // id={item.id}
              // year={item.year}
              // bannerUrl={item.bannerUrl}
              // edit={item.edit}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
