import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountExtendedDataType } from '../../../../types';


const initialState: AccountExtendedDataType = {
  
}

export const currentAccountSlice = createSlice({
  name: 'Account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<AccountExtendedDataType>) => {
      state = action.payload;
    }

  }
})