import { AppThunk } from '../../types';
import { AuthorizationSlice } from './Authorization.slice';
import { AuthorizationRequest } from '../api.requests';
export const AuthorizationThunk =
  (data: any): AppThunk =>
    async (dispatch) => {
      const
        { setIsFetching,setErrors, setAuthData } = AuthorizationSlice.actions;

      dispatch(setIsFetching(true));
      const responce = await AuthorizationRequest(data)
      if (responce.status === 401) {
        dispatch(setErrors('Токен отсутствует или истёк'));
        setTimeout(() => setErrors(null), 3000);
      }
      if (responce.status === 422) {
        dispatch(setErrors('Неверный логин или пароль'));
        setTimeout(() => setErrors(null), 3000)
      }

      if (responce.status === 200) {
        const data = await (responce as Response).json();
        dispatch(setAuthData(data));
        setTimeout(() => setErrors(null), 3000)
      }
      dispatch(setIsFetching(false));
    }