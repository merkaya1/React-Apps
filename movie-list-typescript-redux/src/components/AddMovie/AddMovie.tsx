import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './AddMovie.styles.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../redux/hook';
import { AppDispatch } from '../../redux/store';
import { addMovies } from '../../redux/movieSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

type Inputs = {
  title: string;
  director: string;
  year: string;
  bannerUrl: string;
  id: string;
  edit: boolean;
};

const AddMovie: React.FC = () => {
  const dispatch = useAppDispatch();

  const notify = (title: string) =>
    toast(`Süper! ${title} adlı film listenize eklendi.`, {
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
    dispatch(addMovies(data));
    notify(data.title);
    reset();
  };

  return (
    <div className='add-movie'>
      <h2 className='add-movie-title'>Add Movie</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='add-movie-inputs'>
          <Input register={register} error={errors} type={'text'} id='title' name='title' text='Title' />
          <Input register={register} error={errors} type={'text'} id='director' name='director' text='Director' />
        </div>
        <div className='add-movie-inputs'>
          <Input register={register} error={errors} type={'number'} id='year' name='year' text='Year' />
          <Input register={register} error={errors} type={'text'} id='bannerUrl' name='bannerUrl' text='BannerUrl' />
        </div>
        <Button text='Add Movie' width='w-100' bg='add' />
      </form>
    </div>
  );
};

export default AddMovie;
