import { combineReducers } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counterSlice';


export const rootReducer = combineReducers({
  counter: counterSlice.reducer
})