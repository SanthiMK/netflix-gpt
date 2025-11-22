import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MoviesWrapper from "./MoviesWrapper";
import MoviesList from "./MoviesList";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MoviesWrapper />
      {/* <MoviesList /> */}
    </div>
  );
};

export default Browse;
