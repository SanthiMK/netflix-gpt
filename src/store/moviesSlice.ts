import { createSlice } from "@reduxjs/toolkit";
import { MoviesState, Video } from "../interfaces/movies.interface";

const initialState: MoviesState = {
  movies: [],
  trailerVideo: {} as Video,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.movies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
