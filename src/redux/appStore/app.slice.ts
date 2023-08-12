import { createSlice } from "@reduxjs/toolkit";
import type { Draft, PayloadAction, Slice } from "@reduxjs/toolkit";
import type { AppState } from "../../models/app.model";

export const APP_INITIAL_STATE: AppState = {
  data: null,
};

const appSlice: Slice<AppState, {}, "app"> = createSlice({
  name: "app",
  initialState: APP_INITIAL_STATE,
  reducers: {},
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;
