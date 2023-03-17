import React from 'react';
import Button from '../Button/Button';
import './MovieItem.styles.scss';
import { useAppDispatch } from '../../redux/hook';
import { deleteMovie, editState } from '../../redux/movieSlice';
import ModalEdit from '../ModalEdit/ModalEdit';
import { toast } from 'react-toastify';

interface Movie {
  title: string;
  director: string;
  year: string;
  bannerUrl: string;
  id: string;
  edit: boolean;
}

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  const dispatch = useAppDispatch();

  const notify = (title: string) =>
    toast(`${title} adlı film listenden kaldırıldı.`, {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: 'error',
      theme: 'colored'
    });

  const handleDeleteMovie = (id: string) => {
    dispatch(deleteMovie(id));
    notify(movie.title);
  };

  const handleEdit = (movie: Movie) => {
    dispatch(editState(movie));
  };

  // console.log(`${id} - ${edit}`);
  return (
    <>
      <div className='movie-item' data-key={movie.id}>
        <img src={movie.bannerUrl} alt={movie.title} />
        <div className='movie-item-info'>
          <h3 className='movie-item-info-title'>{movie.title}</h3>
          <p className='movie-item-info-directory'>{movie.director}</p>
          <p className='movie-item-info-year'>{movie.year}</p>
        </div>
        <div className='movie-item-buttons'>
          <Button onclick={() => handleEdit(movie)} text='Edit' bg='edit' />
          <Button onclick={() => handleDeleteMovie(movie.id)} text='Delete' bg='delete' />
        </div>
      </div>
      {movie.edit === true && <ModalEdit movie={movie} />}
    </>
  );
};

export default MovieItem;
