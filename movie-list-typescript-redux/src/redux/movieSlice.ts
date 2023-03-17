import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { v4 as uuidv4, v4 } from 'uuid';

interface MovieState {
  id: string;
  title: string;
  director: string;
  bannerUrl: string;
  year: string;

  edit: boolean;
}

const initialState: MovieState[] = [
  {
    title: 'Dune: Çöl Gezegeni',
    director: 'Denis Villeneuve',
    bannerUrl: 'https://img.fullhdfilmizlesene.pw/poster/izle/dune-col-gezegeni-36299.webp',
    year: '2021',
    edit: false,
    id: '1'
  },
  {
    title: 'Dünyanın En İyi Film Serisinden İnciler',
    director: 'Mustafa Elendil Erkaya',
    bannerUrl:
      'https://img.fullhdfilmizlesene.pw/poster/izle/fullhd-yuzuklerin-efendisi-kralin-donusu-full-hd-film-izle.webp?0.41344401887719084',
    year: '2003',
    edit: false,
    id: '2'
  },
  {
    title: 'John Wick 3 Parabellum',
    director: 'Ramazan Erkaya',
    bannerUrl:
      'https://img.fullhdfilmizlesene.pw/poster/izle/fullhd-john-wick-3-prblm-izlehd-full-filmi.webp?0.03156068009866386',
    year: '2019',
    edit: false,
    id: '3'
  },
  {
    title: 'Karayip Korsanları 1 Siyah İncinin Laneti',
    director: 'Gore Verbinski',
    bannerUrl:
      'https://img.fullhdfilmizlesene.pw/poster/izle/fullhd-karayip-korsanlari-1-siyah-incinin-laneti-izle.webp',
    year: '2003',
    edit: false,
    id: '4'
  },
  {
    title: 'Harry Potter 8 Ölüm Yadigarları Bölüm 2',
    director: 'David Yates',
    bannerUrl:
      'https://img.fullhdfilmizlesene.pw/poster/izle/fullhd-harry-potter-ve-olum-yadigarlari-bolum-2-turkce-izle.webp',
    year: '2011',
    edit: false,
    id: '5'
  }
];

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMovies: (state) => {
      return state;
    },
    addMovies: (state, action: PayloadAction<MovieState>) => {
      const newMovie = { ...action.payload, id: v4(), edit: false };
      state.push(newMovie);
    },
    deleteMovie: (state, action: PayloadAction<string>) => {
      return state.filter((movie) => movie.id !== action.payload);
    },
    editState: (state, action: PayloadAction<MovieState>) => {
      const index: number = state.findIndex((movie) => movie.id === action.payload.id);
      state[index].edit = true;
    },
    updateMovie: (state, action: PayloadAction<MovieState>) => {
      const index: number = state.findIndex((movie) => movie.id == action.payload.id);

      state[index] = action.payload;
      state[index].edit = false;
    }
  }
});

export const { getMovies, addMovies, deleteMovie, editState, updateMovie } = movieSlice.actions;

export default movieSlice.reducer;
