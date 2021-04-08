import { AppThunk } from '../../types';
import { UserDataSlice } from './UserData.slice';
import { UserDataRequest } from '../api.requests';


type UserDataType = {
  userId: string,
  token: string
}

export const UserDataThunk = (data: UserDataType): AppThunk => async (dispatch) => {
  const { setIsFetching, setErrors, setUserInfo  } = UserDataSlice.actions;
  const { userId, token } = data;
  
  dispatch(setIsFetching(true));
  const responce = await UserDataRequest(userId, token);

  if (responce.status === 403) {
    dispatch(setErrors('UserId не совпадает'));
    setTimeout(() => setErrors(false), 3000)
  };

  if (responce.status === 401) {
    dispatch(setErrors('Токен отсутствует или истёк'));
    setTimeout(() => setErrors(false), 3000)
  };

  if (responce.status === 404) {
    dispatch(setErrors('Пользователь не найдее'));
    setTimeout(() => setErrors(false), 3000)
  };

  if (responce.status === 200) {
    const data = await (responce as Response).json();
    dispatch(setUserInfo(data));
  };

  dispatch(setIsFetching(false));


}