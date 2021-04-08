import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// Сделать данные для юзера. Роут есть. Нужен thunk, request, включить в запрос. Пока что будет слишком много данных - вместе с хешем
export const UserDataSlice = createSlice({
  name: 'UserData',
  initialState: {
    isFetching: true,
    errors: false,
    userInfo: undefined
  },
  reducers: {
    setIsFetching: (state, action: PayloadAction<any>) => {
      state.isFetching = action.payload
    },
    setErrors: (state, action: PayloadAction<any>) => {
      state.errors = action.payload
    },
    setUserInfo: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload
    },
    
  }
})