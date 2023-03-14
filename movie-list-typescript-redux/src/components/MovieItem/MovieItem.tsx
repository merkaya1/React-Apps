import React from 'react';
import Button from '../Button/Button';
import './MovieItem.styles.scss';

const MovieItem = () => {
  return (
    <div className='movie-item'>
      <img src='' alt='img' />
      <div className='movie-item-info'>
        <h3 className='movie-item-info-title'>Title</h3>
        <p className='movie-item-info-directory'>Director</p>
        <p className='movie-item-info-year'>Year</p>
      </div>
      <div className='movie-item-buttons'>
        <Button text='Edit' type='edit' />
        <Button text='Delete' type='delete' />
      </div>
    </div>
  );
};

export default MovieItem;
