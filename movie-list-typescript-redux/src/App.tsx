import React from 'react';
import AddMovie from './components/AddMovie/AddMovie';
import MovieList from './components/MovieList/MovieList';

function App() {
  return (
    <div className='App'>
      <AddMovie />
      <MovieList />
    </div>
  );
}

export default App;
