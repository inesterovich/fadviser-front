import { AppThunk, AuthValidationType } from '../../types';
import { AuthorizationSlice } from './Authorization.slice';
import { AuthorizationRequest } from '../api.requests';
import { AuthDataType } from './Authorization.slice';

export const AuthorizationThunk =
  (formData:AuthValidationType, closeModalHandler: () => void): AppThunk =>
    async (dispatch) => {
      const
        { setIsFetching,setErrors, setAuthData } = AuthorizationSlice.actions;

      dispatch(setIsFetching(true));
    
      delete formData.default;
      const responce = await AuthorizationRequest(formData)
      if (responce.status === 401) {
        dispatch(setErrors('Токен отсутствует или истёк'));
        setTimeout(() => dispatch(setErrors(false)), 3000);
      }
      if (responce.status === 403) {
        dispatch(setErrors('Неверный логин или пароль'));
        setTimeout(() => dispatch(setErrors(false)), 3000)
      }

      if (responce.status === 200) {
        const data:AuthDataType = await (responce as Response).json();
        dispatch(setAuthData(data));
        closeModalHandler();
        
      }
      dispatch(setIsFetching(false));
    }