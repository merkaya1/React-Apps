import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './AddMovie.styles.scss';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  title: string;
  director: string;
  year: string;
  bannerUrl: string;
  id: number;
};

const AddMovie: React.FC = () => {
  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className='add-movie'>
      <h2 className='add-movie-title'>Add Movie</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='add-movie-inputs'>
          <Input register={register} error={errors} type={'text'} id='title' name='title' text='Title' />
          <Input register={register} error={errors} type={'text'} id='directory' name='directory' text='Directory' />
        </div>
        <div className='add-movie-inputs'>
          <Input register={register} error={errors} type={'number'} id='year' name='year' text='Year' />
          <Input register={register} error={errors} type={'text'} id='banner' name='banner' text='BannerUrl' />
        </div>
        <Button text='Add Movie' width='w-100' bg='add' />
      </form>
    </div>
  );
};

export default AddMovie;
