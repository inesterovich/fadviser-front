import { AppThunk, AccountExtendedDataType, OperationValidationSchema } from '../../../../types';
import { CurrentAccountSlice } from './CurrentAccount.slice';
import { FetchErrorsStatus, FetchRequestStatus } from '../RequestStatus/RequestStatus.slice';
import { AccountRequest } from '../../../api.requests';

export const addOperationThunk = (
  form: OperationValidationSchema,
  userId: string,
  accountId:string,
  token: string,
  closeModalHandler: () => void
): AppThunk => async (dispatch) => {
  
  const { setErrors } = FetchErrorsStatus.actions;
  const { setIsFetching } = FetchRequestStatus.actions;
  const { setAccount } = CurrentAccountSlice.actions;
  
  dispatch(setIsFetching(true));
    const response = await AccountRequest.addOperation(form, userId, accountId, token);

    switch (response.status) {
      case 200:
        const data:AccountExtendedDataType = await (response as Response).json();
        setAccount(data);
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
      default:
        dispatch(setErrors('Что-то пошло не так, попробуйте снова'));
        setTimeout(() => dispatch(setErrors(null)), 3000);
    }
 
 
  dispatch(setIsFetching(false));




}

export const updateOperationThunk = (
  form: OperationValidationSchema,
  userId: string,
  accountId: string,
  operationId: string,
  token: string,
  closeModalHandler: () => void
): AppThunk => async (dispatch) => {
  
  const { setErrors } = FetchErrorsStatus.actions;
  const { setIsFetching } = FetchRequestStatus.actions;
  const { setAccount } = CurrentAccountSlice.actions;
  
  dispatch(setIsFetching(true));
  const response = await AccountRequest
    .updateOperation(form, userId, accountId, operationId, token);

    switch (response.status) {
      case 200:

        const data:AccountExtendedDataType = await (response as Response).json();
        setAccount(data);
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
      default:
        dispatch(setErrors('Что-то пошло не так, попробуйте снова'));
        setTimeout(() => dispatch(setErrors(null)), 3000);
    }
 
 
  dispatch(setIsFetching(false));




}

export const deleteOperationThunk = (
  userId: string,
  accountId: string,
  operationId:string,
  token: string,
  closeModalHandler: () => void
): AppThunk => async (dispatch) => {
  
  const { setErrors } = FetchErrorsStatus.actions;
  const { setIsFetching } = FetchRequestStatus.actions;
  const { setAccount } = CurrentAccountSlice.actions;
  
  dispatch(setIsFetching(true));
  const response = await AccountRequest
    .deleteOperation(userId, accountId, operationId, token);

    switch (response.status) {
      case 200:
        const data:AccountExtendedDataType = await (response as Response).json();
        setAccount(data);
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
      default:
        dispatch(setErrors('Что-то пошло не так, попробуйте снова'));
        setTimeout(() => dispatch(setErrors(null)), 3000);
    }
 
 
  dispatch(setIsFetching(false));




}