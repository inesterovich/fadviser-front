import { AppThunk } from '../../types';
import { RegistrationSlice } from './Registration.slice';
import { registrationRequest } from '../api.requests';

export const RegistrationThunk = (data:any, closeModalHandler:() => void):AppThunk => async (dispatch) => {
  const { setIsFetching, setRegistered, setErrors } = RegistrationSlice.actions;
  dispatch(setIsFetching(true));
  const statusCode = await registrationRequest(data);

  if (statusCode === 201) {
    closeModalHandler();
  };

  if (statusCode === 417) {
    dispatch(setErrors('Пользователь уже существует'));
    setTimeout(() => dispatch(setErrors(false)), 3000)
  };

  if (statusCode === 500) {
    dispatch(setErrors('Что-то пошло не так. Попробуйте снова'));
    setTimeout(() => dispatch(setErrors(false)), 3000)
  };

  dispatch(setIsFetching(false));
}