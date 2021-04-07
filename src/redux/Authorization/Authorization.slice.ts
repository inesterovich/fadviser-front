import { createSlice, PayloadAction  } from '@reduxjs/toolkit';


export const AuthorizationSlice = createSlice({
  name: 'Authorization',
  initialState: {
    isFetching: false,
    errors: null,
    authData: undefined
  },
  reducers: {
    setIsFetching: (state, action: PayloadAction<any>) => {
      state.isFetching = action.payload
    },
    setErrors: (state, action: PayloadAction<any>) => {
      state.errors = action.payload
    },
    setAuthData: (state, action: PayloadAction<any>) => {
      state.authData = action.payload
    }

  }
})