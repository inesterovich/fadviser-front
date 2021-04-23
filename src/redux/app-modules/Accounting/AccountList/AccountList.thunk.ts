import { AppThunk, AccountDataType, CreateAccountValidationType } from '../../../../types';
import { AccountListSlice } from './AccountList.slice';
import { FetchErrorsStatus, FetchRequestStatus } from '../RequestStatus/RequestStatus.slice';
import { AccountRequest } from '../../../api.requests';

export const AccountListThunk = (userId:string, token:string): AppThunk => async (dispatch) => {
  
  const { setIsFetching } = FetchRequestStatus.actions;
  const { setErrors } = FetchErrorsStatus.actions;
  const { setAccounts } = AccountListSlice.actions;

  dispatch(setIsFetching(true));

  const responce = await AccountRequest.getAll(userId, token);

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



export const createAccountThunk = (
  accountList: AccountDataType[],
  form: CreateAccountValidationType,
  userId: string,
  token: string,
  closeModalHandler: () => void): AppThunk =>
  async (dispatch) => {

  const { setErrors } = FetchErrorsStatus.actions;
  const { setIsFetching } = FetchRequestStatus.actions;
  const { setAccounts } = AccountListSlice.actions;
  
  dispatch(setIsFetching(true));
    const response = await AccountRequest.create(form, userId, token);

    switch (response.status) {
      case 200:
        const data = await (response as Response).json();
        const updatedArray = [...accountList, data?.account as AccountDataType];
        dispatch(setAccounts(updatedArray));
        closeModalHandler();
        break;
      case 400:
        dispatch(setErrors('Валидация не удалась'));
        setTimeout(() => dispatch(setErrors(null)), 3000);
        break;
      case 401:
        dispatch(setErrors('Токен недействителен или отсутствует'));
        setTimeout(() => dispatch(setErrors(null)), 3000);
        break;
      case 417:
        dispatch(setErrors('Счёт с таким именем уже существует'));
        setTimeout(() => dispatch(setErrors(null)), 3000);
        break;
    
      default:
        dispatch(setErrors('Что-то пошло не так, попробуйте снова'));
        setTimeout(() => dispatch(setErrors(null)), 3000);
    }
 
 
  dispatch(setIsFetching(false));


}