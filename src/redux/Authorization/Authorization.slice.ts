import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

export type AuthDataType = {
  token: string,
  _id?: string,
  [key:string]: string|undefined
}

type AuthStateType = {
  isFetching: boolean,
  errors: any,
  authData?: AuthDataType
}

const initialState: AuthStateType = {
  isFetching: false,
  errors: null,
  authData: undefined
}

export const AuthorizationSlice = createSlice({
  name: 'Authorization',
  initialState,
  reducers: {
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload
    },
    setErrors: (state, action: PayloadAction<any>) => {
      state.errors = action.payload
    },
    setAuthData: (state, action: PayloadAction<AuthDataType|undefined>) => {
      state.authData = action.payload
    }

  }
})