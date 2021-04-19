import { AppThunk } from '../../../../types'
import { AccountsSlice } from './Accounts.slice';
import { AccountListRequest } from '../../../api.requests';

export const AccountListThunk = (userId: string, token: string): AppThunk => async (dispatch) => {
  
  const { setIsFetching, setAccounts, setErrors } = AccountsSlice.actions;
  dispatch(setIsFetching(true));

  const responce = await AccountListRequest(userId, token);

  // Тут кейсы как раз для switch
  if (responce.status === 400) {
    dispatch(setErrors('Валидация не удалась'));
    setTimeout(() => dispatch(setErrors(false)), 3000);
  }

  if (responce.status === 401) {
    dispatch(setErrors('Токен отсутствует или истёк'));
    setTimeout(() => dispatch(setErrors(false)), 3000);

  }

  if (responce.status === 500) {
    dispatch(setErrors('Что-то пошло не так. Попробуйте снова'));
    setTimeout(() => setErrors(false), 3000)
  };

  if (responce.status === 200) {
    const data = await (responce as Response).json();
    dispatch(setAccounts(data));
  }

  dispatch(setIsFetching(false));
}