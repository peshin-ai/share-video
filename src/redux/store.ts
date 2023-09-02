import type {
  AnyAction,
  CombinedState,
  EmptyObject,
  PreloadedState,
  ThunkMiddleware,
} from '@reduxjs/toolkit';
import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

import type { AppState } from '../models/app.model';

import { configureStore } from '@reduxjs/toolkit';

import { appRootReducer } from '../redux/root-reducer';

export const appStore: ToolkitStore<
  EmptyObject & {
    app: AppState;
  },
  AnyAction
> = configureStore({
  reducer: appRootReducer,
});

export const setupStore = (
  preloadedState?: PreloadedState<RootState>
): ToolkitStore<
  EmptyObject & {
    app: AppState;
  },
  AnyAction,
  [
    ThunkMiddleware<
      CombinedState<{
        app: AppState;
      }>,
      AnyAction
    >
  ]
> => {
  return configureStore({
    reducer: appRootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof appRootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
