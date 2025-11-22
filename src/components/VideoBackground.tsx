import { RootState } from "../store/appStore";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = (props: { movieId: number }) => {
  const video = useSelector((store: RootState) => store.movies)?.trailerVideo;

  const movieId = props.movieId;

  useTrailerVideo(movieId);

  return (
    <div>
      {video && (
        <iframe
          className="w-screen h-screen absolute top-0 left-0 -z-10 object-cover"
          src={`https://www.youtube.com/embed/${video.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&disablekb=1&iv_load_policy=3&playsinline=1`}
          allow="autoplay; encrypted-media"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={false}
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
