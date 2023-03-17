import React from 'react';
import AddMovie from './components/AddMovie/AddMovie';
import MovieList from './components/MovieList/MovieList';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <AddMovie />
      <MovieList />
      <ToastContainer />
    </div>
  );
}

export default App;
