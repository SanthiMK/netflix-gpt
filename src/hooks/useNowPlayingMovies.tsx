import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { API_OPTIONS, NOW_PLATYING_API_URL } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  useEffect(() => {
    getNowPlayingMivies();
  }, []);

  const dispatch = useDispatch();

  const getNowPlayingMivies = async () => {
    const response = await fetch(NOW_PLATYING_API_URL, API_OPTIONS);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };
};

export default useNowPlayingMovies;
