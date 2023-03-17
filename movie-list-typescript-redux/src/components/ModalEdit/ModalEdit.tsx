import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './ModalEdit.styles.scss';
import { useAppDispatch } from '../../redux/hook';
import { addMovies, updateMovie } from '../../redux/movieSlice';
import { toast } from 'react-toastify';

type Inputs = {
  title: string;
  director: string;
  year: string;
  bannerUrl: string;
  id: string;
  edit: boolean;
};

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

const ModalEdit = ({ movie }: MovieItemProps) => {
  const dispatch = useAppDispatch();

  const notify = (id: string, title: string) =>
    toast(`Süper! ${id} numaralı ve ${title} adlı film güncellenmiştir.`, {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: 'success',
      theme: 'colored'
    });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    dispatch(updateMovie(data));
    notify(data.id, data.title);
  };

  return (
    <div className='modal-edit'>
      <div className='add-movie' style={{ backgroundColor: 'rgba(104, 105, 103, 0.9)' }}>
        <h2 className='add-movie-title'>Add Movie</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='add-movie-inputs'>
            <Input
              register={register}
              // value={movie.title}
              error={errors}
              type={'text'}
              id={`title-${movie.id}`}
              name='title'
              text='Title'
            />
            <Input
              register={register}
              // value={movie.director}
              error={errors}
              type={'text'}
              id={`director-${movie.id}`}
              name='director'
              text='Director'
            />
          </div>
          <div className='add-movie-inputs'>
            <Input
              register={register}
              // value={movie.year}
              error={errors}
              type={'number'}
              id={`year-${movie.id}`}
              name='year'
              text='Year'
            />
            <Input
              register={register}
              // value={movie.bannerUrl}
              error={errors}
              type={'text'}
              id={`bannerUrl-${movie.id}`}
              name='bannerUrl'
              text='BannerUrl'
            />

            <Input
              register={register}
              // disabled={true}
              value={movie.id}
              error={errors}
              type={'text'}
              id='id'
              name='id'
              text='id'
              display='none'
            />
          </div>
          <Button text='Update Movie' width='w-100' bg='edit' />
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;
