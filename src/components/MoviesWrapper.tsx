import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/appStore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { Movie } from "../interfaces/movies.interface";

const MoviesWrapper = () => {
  const movies = useSelector((store: RootState) => store.movies)?.movies;
  if (!movies.length) return;

  const trendingMovie = movies[0] as Movie;
  const { title, overview } = trendingMovie;
  
  return (
    <div>
      <VideoBackground movieId={trendingMovie.id}/>
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MoviesWrapper;
