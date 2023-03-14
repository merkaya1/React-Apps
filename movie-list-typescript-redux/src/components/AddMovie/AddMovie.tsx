import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './AddMovie.styles.scss';

const AddMovie: React.FC = () => {
  return (
    <div className='add-movie'>
      <h2 className='add-movie-title'>Add Movie</h2>
      <div className='add-movie-inputs'>
        <Input type={'text'} id='title' name='title' text='Title' />
        <Input type={'text'} id='directory' name='directory' text='Directory' />
      </div>
      <div className='add-movie-inputs'>
        <Input type={'number'} id='year' name='year' text='Year' />
        <Input type={'text'} id='banner' name='banner' text='BannerUrl' />
      </div>
      <Button text='Add Movie' width='w-100' type='add' />
    </div>
  );
};

export default AddMovie;
