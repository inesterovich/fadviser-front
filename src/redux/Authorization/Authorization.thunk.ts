import { AppThunk } from '../../types';
import { AuthorizationSlice } from './Authorization.slice';
import { AuthorizationRequest } from '../api.requests';
import { AuthDataType } from './Authorization.slice';

export const AuthorizationThunk =
  (formData:any): AppThunk =>
    async (dispatch) => {
      const
        { setIsFetching,setErrors, setAuthData } = AuthorizationSlice.actions;

      dispatch(setIsFetching(true));
      const responce = await AuthorizationRequest(formData)
      if (responce.status === 401) {
        dispatch(setErrors('Токен отсутствует или истёк'));
        setTimeout(() => setErrors(false), 3000);
      }
      if (responce.status === 422) {
        dispatch(setErrors('Неверный логин или пароль'));
        setTimeout(() => setErrors(false), 3000)
      }

      if (responce.status === 200) {
        const data:AuthDataType = await (responce as Response).json();
        dispatch(setAuthData(data));
        setTimeout(() => setErrors(false), 3000)
      }
      dispatch(setIsFetching(false));
    }