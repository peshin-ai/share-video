export type shareMovieType = {
  movieAuthor: string;
  movieId: string;
  movieTitle: string;
  movieDescription: string;
};

export type likeMoveType = {
  movieId: string;
  userEmail: string | undefined;
};