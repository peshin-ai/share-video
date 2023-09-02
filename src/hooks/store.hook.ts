import type {
  Action,
  AnyAction,
  CombinedState,
  Dispatch,
  ThunkDispatch,
} from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';

import { AppState } from '../models/app.model';

export const useAppDispatch = (): Dispatch<AnyAction> &
  ThunkDispatch<AnyAction, CombinedState<AppState>, Action<unknown>> =>
  useDispatch();
