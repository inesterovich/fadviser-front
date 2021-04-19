import { combineReducers } from '@reduxjs/toolkit';
import { RegistrationSlice } from './Registation/Registration.slice';
import { AuthorizationSlice } from './Authorization/Authorization.slice';
import { UserDataSlice } from './UserData/UserData.slice';
import { AccountsSlice } from './app-modules/Accounting/Accounts/Accounts.slice';

const accountsReducer = combineReducers({
  accountsData: AccountsSlice.reducer
})

export const rootReducer = combineReducers({
  register: RegistrationSlice.reducer,
  authorization: AuthorizationSlice.reducer,
  user: UserDataSlice.reducer,
  accounts: accountsReducer
})