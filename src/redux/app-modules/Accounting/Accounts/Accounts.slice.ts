import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type AccountsDataType =
  {
    _id: string,
    name: string,
    operations?: any[],
    sum: number,
    owner?: string,
    
  }[];

  export type AccountsStateType = {
    isFetching: boolean,
    errors: any,
    accountsList?: AccountsDataType
  }

const initialState:AccountsStateType = {
  isFetching: false,
  errors: null,
  accountsList: undefined
  }

export const AccountsSlice = createSlice({
  name: 'AccountList',
  initialState,
  reducers: {
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload
    },
    setErrors: (state, action: PayloadAction<any>) => {
      state.errors = action.payload
    },
    setAccounts: (state, action: PayloadAction<AccountsDataType | undefined>) => {
      state.accountsList = action.payload
    }
  }
  })
