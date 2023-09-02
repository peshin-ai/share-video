export const sliceMovieURL = (url: string) => {
  const urlArray = url.split("/");
  const movieId = urlArray[urlArray.length - 1];
  return movieId;
}  