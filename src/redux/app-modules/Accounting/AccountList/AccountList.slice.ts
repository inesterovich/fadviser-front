import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountExtendedDataType } from '../../../../types';

const initialState:AccountExtendedDataType[] = []

export const AccountListSlice = createSlice({
  name: 'AccountList',
  initialState,
  reducers: {
    setAccounts: (state, action: PayloadAction<AccountExtendedDataType[]>) => {
      return action.payload
    }
  }
})