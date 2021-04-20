import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const FetchRequestStatus = createSlice({
  name: 'fetchRequestStatus',
  initialState: false,
  reducers: {
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      return action.payload
    }
  }
})

export const FetchErrorsStatus = createSlice({
  name: 'requestErrors',
  initialState: false as any,
  reducers: {
    setErrors: (state, action:PayloadAction<any>) => {
      return action.payload
    }
  }
})