import {
  AppState,
  ModuleState,
} from 'models/app.model';
import { createSelector } from 'reselect';

export const selectApp = (state: ModuleState): AppState => state.app;

export const selectGetUserToken = createSelector(
  [selectApp],
  (agentState: AppState): AppState["accessToken"] => agentState.accessToken
);

export const selectGetMovies = createSelector(
  [selectApp],
  (agentState: AppState): AppState["movies"] => agentState.movies
);

export const selectGetMoviesStatus = createSelector(
  [selectApp],
  (agentState: AppState): AppState["status"] => agentState.status
);

export const selectGetUserEmail = createSelector(
  [selectApp],
  (agentState: AppState): AppState["userEmail"] => agentState.userEmail
);

export const selectGetSnackbarOpen = createSelector(
  [selectApp],
  (agentState: AppState): AppState["snackbarOpen"] => agentState.snackbarOpen
);

export const selectGetSnackbarStatus = createSelector(
  [selectApp],
  (agentState: AppState): AppState["snackbarStatus"] =>
    agentState.snackbarStatus
);

export const selectGetSnackbarMessage = createSelector(
  [selectApp],
  (agentState: AppState): AppState["snackbarMessage"] =>
    agentState.snackbarMessage
);
