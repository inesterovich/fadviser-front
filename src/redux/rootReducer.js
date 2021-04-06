import { combineReducers } from '@reduxjs/toolkit';
import { RegistrationSlice } from './Registation/Registration.slice';


export const rootReducer = combineReducers({
  register: RegistrationSlice.reducer
})