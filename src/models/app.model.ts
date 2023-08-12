import type { CombinedState } from 'redux';

export interface AppState {
    data: object | null;
}

export type ModuleState = CombinedState<{
	app: AppState;
}>;
