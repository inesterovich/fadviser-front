import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountDataType } from '../../../../types';

const initialState:AccountDataType[] = []

export const AccountListSlice = createSlice({
  name: 'AccountList',
  initialState,
  reducers: {
    setAccounts: (state, action: PayloadAction<AccountDataType[]>) => {
      return action.payload
    }
  }
})