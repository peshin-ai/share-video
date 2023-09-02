import type {
  Draft,
  PayloadAction,
  Slice,
} from '@reduxjs/toolkit';

import type { AppState } from '../../models/app.model';

import { createSlice } from '@reduxjs/toolkit';

import {
  handleDislikesMovie,
  handleGetMovies,
  handleLikesMovie,
  handleLogin,
  handleShareMovie,
} from './app.operation';

export const APP_INITIAL_STATE: AppState = {
  data: null,
  accessToken: undefined,
  previousMovies: [],
  movies: [],
  movie: undefined,
  status: "idle",
  userEmail: undefined,
  snackbarOpen: false,
  snackbarStatus: undefined,
  snackbarMessage: null,
};

const appSlice: Slice<
  AppState,
  {
    setAccessToken: (
      state: Draft<AppState>,
      action: PayloadAction<string>
    ) => void;
    setUserEmail: (
      state: Draft<AppState>,
      action: PayloadAction<string>
    ) => void;
    resetAccessToken: (state: Draft<AppState>) => void;
    handleLikesMovie: (
      state: Draft<AppState>,
      action: PayloadAction<AppState["movies"]>
    ) => void;
    handleDislikesMovie: (
      state: Draft<AppState>,
      action: PayloadAction<AppState["movies"]>
    ) => void;
    resetSnackbar: (state: Draft<AppState>) => void;
    setSnackbarOpen: (state: Draft<AppState>) => void;
    setSnackbarStatus: (
      state: Draft<AppState>,
      action: PayloadAction<AppState["snackbarStatus"]>
    ) => void;
    setSnackbarMessage: (
      state: Draft<AppState>,
      action: PayloadAction<AppState["snackbarMessage"]>
    ) => void;
    handleShareMovie: (
      state: Draft<AppState>,
      action: PayloadAction<AppState["movie"]>
    ) => void;
  },
  "app"
> = createSlice({
  name: "app",
  initialState: APP_INITIAL_STATE,
  reducers: {
    resetAccessToken: (state: Draft<AppState>) => {
      state.accessToken = undefined;
      state.userEmail = undefined;
    },
    setAccessToken: (
      state: Draft<AppState>,
      action: PayloadAction<AppState["accessToken"]>
    ) => {
      state.accessToken = action.payload;
    },
    setUserEmail: (
      state: Draft<AppState>,
      action: PayloadAction<AppState["userEmail"]>
    ) => {
      state.userEmail = action.payload;
    },
    handleLikesMovie: (
      state: Draft<AppState>,
      action: PayloadAction<AppState["movies"]>
    ) => {
      state.movies = action.payload;
    },
    handleDislikesMovie: (
      state: Draft<AppState>,
      action: PayloadAction<AppState["movies"]>
    ) => {
      state.movies = action.payload;
    },
    resetSnackbar: (state: Draft<AppState>) => {
      state.snackbarOpen = false;
      state.snackbarStatus = undefined;
      state.snackbarMessage = null;
    },
    setSnackbarOpen: (state: Draft<AppState>) => {
      state.snackbarOpen = true;
    },
    setSnackbarStatus: (
      state: Draft<AppState>,
      action: PayloadAction<AppState["snackbarStatus"]>
    ) => {
      state.snackbarStatus = action.payload;
    },
    setSnackbarMessage: (
      state: Draft<AppState>,
      action: PayloadAction<AppState["snackbarMessage"]>
    ) => {
      state.snackbarMessage = action.payload;
    },
    handleShareMovie: (
      state: Draft<AppState>,
      action: PayloadAction<AppState["movie"]>
    ) => {
      state.movie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetMovies.fulfilled, (state, action) => {
      state.status = "idle";
      state.movies = action.payload ? action.payload : [];
      if (state.previousMovies.length === 0) {
        state.previousMovies = action.payload ? action.payload : [];
      } else if (state.previousMovies !== state.movies) {
        state.previousMovies = state.movies;
        state.snackbarOpen = true;
        state.snackbarStatus = "info";
        state.snackbarMessage = "Movies updated";
      }
    });
    builder.addCase(handleGetMovies.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(handleGetMovies.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.status = "idle";
      state.accessToken = action.payload?.["access_token"];
      state.userEmail = action.payload?.["email"];
    });
    builder.addCase(handleLogin.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(handleLogin.rejected, (state) => {
      state.status = "failed";
      state.snackbarOpen = true;
      state.snackbarStatus = "error";
      state.snackbarMessage = "Looks like you have entered wrong email";
    });
    builder.addCase(handleLikesMovie.fulfilled, (state, action) => {
      state.status = "idle";
      state.movies = action.payload ? action.payload : [];
      state.snackbarOpen = true;
      state.snackbarStatus = "success";
      state.snackbarMessage = "You liked this movie";
    });
    builder.addCase(handleLikesMovie.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(handleLikesMovie.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(handleDislikesMovie.fulfilled, (state, action) => {
      state.status = "idle";
      state.movies = action.payload ? action.payload : [];
      state.snackbarOpen = true;
      state.snackbarStatus = "success";
      state.snackbarMessage = "You disliked this movie";
    });
    builder.addCase(handleDislikesMovie.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(handleDislikesMovie.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(handleShareMovie.fulfilled, (state, action) => {
      state.status = "idle";
      state.movies = action.payload ? action.payload : [];
      state.snackbarOpen = true;
      state.snackbarStatus = "success";
      state.snackbarMessage = "You shared this movie";
    });
    builder.addCase(handleShareMovie.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(handleShareMovie.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;
