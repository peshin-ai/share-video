import type { CombinedState } from 'redux';

import { AlertColor } from '@mui/material';
import {
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

export type Movie = {
  _id: string;
  movieId: string;
  movieTitle: string;
  movieAuthor: string;
  movieLikes?: number;
  movieDislikes?: number;
  movieDescription?: string;
  movieLikesBy?: string[];
  movieDislikesBy?: string[];
};

export type GetMoviesResponse = {
  movies: Movie[];
};

export interface AppState {
  data: object | null;
  status: "idle" | "loading" | "failed";
  previousMovies: Movie[];
  movies: Movie[];
  movie: Movie | undefined;
  accessToken: string | undefined;
  userEmail: string | undefined;
  snackbarOpen: boolean;
  snackbarStatus: AlertColor | undefined;
  snackbarMessage: string | null;
}

export interface UserLoginResponse {
  accessToken: string;
  userEmail: string;
}

export type ModuleState = CombinedState<{
  app: AppState;
}>;

export type GetMoviesFailureAction = PayloadAction<
  unknown,
  string,
  PayloadMetaAction,
  SerializedError
>;

export type UserLoginFailureAction = PayloadAction<
  unknown,
  string,
  PayloadMetaAction,
  SerializedError
>;

export type GetMoviesSuccessAction = PayloadAction<
  AxiosResponse<GetMoviesResponse>
>;

export type UserLoginSuccessAction = PayloadAction<
  AxiosResponse<UserLoginResponse>
>;

export type PayloadMetaAction = {
  aborted: boolean;
  arg: void;
  condition: boolean;
  requestId: string;
  requestStatus: "rejected";
} & ({ rejectedWithValue: true } | { rejectedWithValue: false });
