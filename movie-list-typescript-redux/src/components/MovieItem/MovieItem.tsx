import React from 'react';
import Button from '../Button/Button';
import './MovieItem.styles.scss';

interface MovieProps {
  title: string;
  director: string;
  year: string;
  bannerUrl: string;
  id: number;
}

interface MovieItemProps {
  title: string;
  director: string;
  year: string;
  bannerUrl: string;
  id: number;
}

const MovieItem: React.FC<MovieItemProps> = ({ title, director, year, bannerUrl, id }) => {
  return (
    <div className='movie-item'>
      <img src={bannerUrl} alt={title} />
      <div className='movie-item-info'>
        <h3 className='movie-item-info-title'>{title}</h3>
        <p className='movie-item-info-directory'>{director}</p>
        <p className='movie-item-info-year'>{year}</p>
      </div>
      <div className='movie-item-buttons'>
        <Button text='Edit' bg='edit' />
        <Button text='Delete' bg='delete' />
      </div>
    </div>
  );
};

export default MovieItem;
