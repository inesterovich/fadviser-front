import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useApDispatch, useAppSelector } from '../../../../hooks/redux.hooks';
import { Loader } from '../../../../components/Loader';
import { CurrentAccountThunk  } from '../../../../redux/app-modules/Accounting/AccountList/AccountList.thunk';
// Нужен UseEffect, useAppSelector, map, table
type ParamsType = {
  accountId: string
}


export const AccountDetailPage: React.FC = () => {

  const dispatch = useApDispatch();
  const isFetching = useAppSelector(state => state.accounts.isFetching);
  const userId = useAppSelector(state => state.authorization.authData?._id) as string;
  const token = useAppSelector(state => state.authorization.authData?.token) as string;
  const account = useAppSelector(state => state.accounts.account);

  const { accountId }:ParamsType = useParams();

  useEffect(() => {
      dispatch(CurrentAccountThunk(userId, accountId, token))
    }, [account._id, accountId, dispatch, token, userId]) 
  if (isFetching) {
    return <Loader />
  }

  return (
    <div className="account">
      <p>Check the state</p>
    </div>
  )
}