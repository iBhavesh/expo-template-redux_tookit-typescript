import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import uiSlice from "../features/ui/ui";

export const store = configureStore({
  reducer: {
    ui: uiSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;