import { ThunkAction, Action } from '@reduxjs/toolkit';
import { store } from './redux/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> =
  ThunkAction<
    ReturnType,
    RootState, unknown, Action<string>
  >