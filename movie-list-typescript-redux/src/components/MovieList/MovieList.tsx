import React, { useEffect } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.styles.scss';
import movieData from '../../data.json';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hook';

interface MovieProps {
  title: string;
  director: string;
  year: string;
  bannerUrl: string;
  id: number;
}

const MovieList: React.FC = () => {
  // const [movies, setMovies] = useState<MovieProps[]>(movieData);

  const movies = useAppSelector((state) => state.movies);
  console.log(movies);

  return (
    <div className='movie-list'>
      <h1 className='movie-list-title'>Movies</h1>
      <ul>
        {movies.map((item, index) => (
          <li key={index}>
            <MovieItem
              id={item.id}
              title={item.title}
              director={item.director}
              year={item.year}
              bannerUrl={item.bannerUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
