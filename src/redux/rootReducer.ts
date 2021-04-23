import { combineReducers } from '@reduxjs/toolkit';
import { RegistrationSlice } from './Registation/Registration.slice';
import { AuthorizationSlice } from './Authorization/Authorization.slice';
import { UserDataSlice } from './UserData/UserData.slice';
import { AccountListSlice } from './app-modules/Accounting/AccountList/AccountList.slice';
import { FetchRequestStatus, FetchErrorsStatus } from './app-modules/Accounting/RequestStatus/RequestStatus.slice';
import { CurrentAccountSlice } from './app-modules/Accounting/CurrentAccount/CurrentAccount.slice';

const accountsReducer = combineReducers({
  isFetching: FetchRequestStatus.reducer,
  errors: FetchErrorsStatus.reducer,
  accountList: AccountListSlice.reducer,
  account: CurrentAccountSlice.reducer
})

export const rootReducer = combineReducers({
  register: RegistrationSlice.reducer,
  authorization: AuthorizationSlice.reducer,
  user: UserDataSlice.reducer,
  accounts: accountsReducer
})