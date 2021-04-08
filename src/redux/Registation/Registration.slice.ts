import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type RegisterStateType = {
  isFetching: boolean,
  errors: any,
  registered: boolean
}

const initialState:RegisterStateType = {
  isFetching: false,
  errors: false,
  registered: false,
}

export const RegistrationSlice = createSlice({
  name: 'Registration',
  initialState,
  reducers: {
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload
    }
     ,
    setErrors: (state, action: PayloadAction<any>) => {
      state.errors = action.payload
    }
      ,
    setRegistered: (state, action: PayloadAction<boolean>) => {
      state.registered = action.payload
    }
      
    
  }
})