import { combineReducers } from '@reduxjs/toolkit';
import { RegistrationSlice } from './Registation/Registration.slice';
import { AuthorizationSlice } from './Authorization/Authorization.slice';
import { UserDataSlice } from './UserData/UserData.slice';


export const rootReducer = combineReducers({
  register: RegistrationSlice.reducer,
  authorization: AuthorizationSlice.reducer,
  user: UserDataSlice.reducer
})