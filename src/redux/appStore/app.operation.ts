import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import {
  likeMoveType,
  shareMovieType,
  userLoginType,
} from 'types';

import {
  GetMoviesSuccessAction,
  UserLoginSuccessAction,
} from '../../models/app.model';

const API_URL = import.meta.env.VITE_API_BASE_URL as string;

export const handleGetMovies = createAsyncThunk(
  "app/handleGetMovies",
  // eslint-disable-next-line @typescript-eslint/typedef
  async (_: undefined, thunkAPI) => {
    try {
      await new Promise(() =>
        axios.get(`${API_URL}/movies`).then((response) => {
          thunkAPI.dispatch({
            type: "app/handleGetMovies/fulfilled",
            payload: response.data,
          } as GetMoviesSuccessAction);

          return response.data;
        })
      );
    } catch (getMoviesError: unknown) {
      return thunkAPI.rejectWithValue(getMoviesError as AxiosError);
    }
  }
);

export const handleLogin = createAsyncThunk(
  "app/handleLogin",
  // eslint-disable-next-line @typescript-eslint/typedef
  async (data: userLoginType, thunkAPI) => {
    try {
      await new Promise(() =>
        axios
          .post(`${API_URL}/auth/login`, {
            email: data.email,
            password: data.password,
          })
          .then((response) => {
            thunkAPI.dispatch({
              type: "app/handleLogin/fulfilled",
              payload: response.data,
            } as UserLoginSuccessAction);
            return response.data;
          })
      );
    } catch (loginError: unknown) {
      return thunkAPI.rejectWithValue(loginError as AxiosError);
    }
  }
);

export const handleShareMovie = createAsyncThunk(
  "app/handleShareMovie",
  // eslint-disable-next-line @typescript-eslint/typedef
  async (data: shareMovieType, thunkAPI) => {
    try {
      await new Promise(() =>
        axios
          .post(`${API_URL}/movies/create`, {
            movieId: data.movieId,
            movieTitle: data.movieTitle,
            movieAuthor: data.movieAuthor,
            movieDescription: data.movieDescription,
          })
          .then((response) => {
            console.log(response, "response");
            thunkAPI.dispatch({
              type: "app/handleShareMovie/fulfilled",
              payload: response.data,
            } as GetMoviesSuccessAction);
            return response.data;
          })
      );
    } catch (shareMovieError: unknown) {
      return thunkAPI.rejectWithValue(shareMovieError as AxiosError);
    }
  }
);

export const handleLikesMovie = createAsyncThunk(
  "app/handleLikesMovie",
  // eslint-disable-next-line @typescript-eslint/typedef
  async (data: likeMoveType, thunkAPI) => {
    try {
      await new Promise(() =>
        axios
          .put(`${API_URL}/movies/like`, {
            movieId: data.movieId,
            email: data.userEmail,
          })
          .then((response) => {
            thunkAPI.dispatch({
              type: "app/handleLikesMovie/fulfilled",
              payload: response.data,
            } as GetMoviesSuccessAction);
            return response.data;
          })
      );
    } catch (likeMovieError: unknown) {
      return thunkAPI.rejectWithValue(likeMovieError as AxiosError);
    }
  }
);

export const handleDislikesMovie = createAsyncThunk(
  "app/handleDislikesMovie",
  // eslint-disable-next-line @typescript-eslint/typedef
  async (data: likeMoveType, thunkAPI) => {
    try {
      await new Promise(() =>
        axios
          .put(`${API_URL}/movies/dislike`, {
            movieId: data.movieId,
            email: data.userEmail,
          })
          .then((response) => {
            thunkAPI.dispatch({
              type: "app/handleDislikesMovie/fulfilled",
              payload: response.data,
            } as GetMoviesSuccessAction);
            return response.data;
          })
      );
    } catch (dislikeMovieError: unknown) {
      return thunkAPI.rejectWithValue(dislikeMovieError as AxiosError);
    }
  }
);
