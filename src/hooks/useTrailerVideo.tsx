import { useEffect } from "react";
import { VideoSite, VideoType } from "../enums/video.enum";
import { Video } from "../interfaces/movies.interface";
import { addTrailerVideo } from "../store/moviesSlice";
import { API_OPTIONS, GET_MOVIE_VIDEOS_API_URL } from "../utils/constant";
import { useDispatch } from "react-redux";

const useTrailerVideo = (movieId: number) => {
  useEffect(() => {
    getMovieVideos();
  }, [movieId]);

  const dispatch = useDispatch();
  
  const getMovieVideos = async () => {
    const response = await fetch(
      GET_MOVIE_VIDEOS_API_URL(movieId),
      API_OPTIONS
    );
    const data = await response.json();
    const trailerVideo = data?.results?.find(
      (video: Video) =>
        video.type === VideoType.Trailer && video.site === VideoSite.YouTube
    );
    dispatch(addTrailerVideo(trailerVideo));
  };
};

export default useTrailerVideo;
