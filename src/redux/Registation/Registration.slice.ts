import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const RegistrationSlice = createSlice({
  name: 'Registration',
  initialState: {
    isFetching: false,
    errors: null,
    registered: false,
  },
  reducers: {
    setIsFetching: (state, action: PayloadAction<any>) => {
      state.isFetching = action.payload
    }
     ,
    setErrors: (state, action: PayloadAction<any>) => {
      state.errors = action.payload
    }
      ,
    setRegistered: (state, action: PayloadAction<any>) => {
      state.registered = action.payload
    }
      
    
  }
})