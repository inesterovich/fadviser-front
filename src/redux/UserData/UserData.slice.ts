import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfoType } from '../../types';

type initialStateType = {
  isFetching: boolean,
  errors: any,
  userInfo?: UserInfoType
}

const initialState:initialStateType = {
  isFetching: false,
  errors: false,
}

// Сделать данные для юзера. Роут есть. Нужен thunk, request, включить в запрос. Пока что будет слишком много данных - вместе с хешем
export const UserDataSlice = createSlice({
  name: 'UserData',
  initialState,
  reducers: {
    setIsFetching: (state, action: PayloadAction<any>) => {
      state.isFetching = action.payload
    },
    setErrors: (state, action: PayloadAction<any>) => {
      state.errors = action.payload
    },
    setUserInfo: (state, action: PayloadAction<UserInfoType|undefined>) => {
      state.userInfo = action.payload
    },
    
  }
})