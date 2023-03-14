import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface MovieState {
  id: number;
  title: string;
  director: string;
  bannerUrl: string;
  year: string;
}

const initialState: MovieState[] = [
  {
    title: 'Dune: Çöl Gezegeni',
    director: 'Denis Villeneuve',
    bannerUrl: 'https://img.fullhdfilmizlesene.pw/poster/izle/dune-col-gezegeni-36299.webp',
    year: '2021',

    id: 1
  },
  {
    title: 'sadasdasd',
    director: 'Peter Jackson',
    bannerUrl:
      'https://img.fullhdfilmizlesene.pw/poster/izle/fullhd-yuzuklerin-efendisi-kralin-donusu-full-hd-film-izle.webp?0.41344401887719084',
    year: '2003',
    id: 2
  },
  {
    title: 'John Wick 3 Parabellum',
    director: 'Ramazan Erkaya',
    bannerUrl:
      'https://img.fullhdfilmizlesene.pw/poster/izle/fullhd-john-wick-3-prblm-izlehd-full-filmi.webp?0.03156068009866386',
    year: '2019',
    id: 3
  }
];

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMovies: (state) => {
      return state;
    },
    addMovie: (state, action) => {
      const newMovie = action.payload;
      state.push(newMovie);
    }
  }
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
