import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountExtendedDataType } from '../../../../types';


const initialState: AccountExtendedDataType = {
  
}

export const CurrentAccountSlice = createSlice({
  name: 'Account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<AccountExtendedDataType>) => {
      state = action.payload;
    }

  }
})