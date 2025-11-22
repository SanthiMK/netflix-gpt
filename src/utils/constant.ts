export const BACKGROUND_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const LOGO_URL =
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const PHOTO_URL =
  "https://lh3.googleusercontent.com/-Q-DgP6GT6CQ/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmAV9RqsTazE-gFtRTvUohnkmzAmw/photo.jpg?sz=46";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODM0Mjk0MmNiZTc1MzliNThhNTg3ZTVlODViNDJlZCIsIm5iZiI6MTc2MzU2ODU1OC45MTkwMDAxLCJzdWIiOiI2OTFkZWJhZWJhOGQ4ZDA5MjEyZDQzZjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QXqPuLKHJAwEn19G6To1IZHp8ByTuWDyh9yU-74BhgA",
  },
};

export const NOW_PLATYING_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const GET_MOVIE_VIDEOS_API_URL = (movieId: number) =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos`;
