import type { AnyAction, CombinedState, Reducer } from '@reduxjs/toolkit';

import type { ModuleState } from '../models/app.model';

import { combineReducers } from '@reduxjs/toolkit';

import { appReducer } from './appStore/app.slice';

export const appRootReducer: Reducer<
	CombinedState<ModuleState>,
	AnyAction
> = combineReducers({
	app: appReducer,
});