import React, { useEffect } from 'react';
import { useAppSelector, useApDispatch } from '../../../../hooks/redux.hooks';
import { AccountListThunk } from '../../../../redux/app-modules/Accounting/AccountList/AccountList.thunk';
export const AccountsPage: React.FC = () => {

  const dispatch = useApDispatch();
  const isFetching = useAppSelector(state => state.accounts.isFetching);
  const userId = useAppSelector(state => state.authorization.authData?._id) as string;
  const token = useAppSelector(state => state.authorization.authData?.token) as string;
  const accountList = useAppSelector(state => state.accounts.accountList);
  
  useEffect(() => {
   
    dispatch(AccountListThunk(userId, token))
 }, [dispatch, token, userId])


  if (isFetching) {
    return <div className="account-list">
      <h3>Loading...</h3>
    </div>
  }


  return (
    <div className="account-list">
      <h2>Ваши счета</h2>
      {
        accountList.length === 0 ?
        
        <div className="account-list">
          <p>Нет ни одного счёта</p>
            <button type="button">Создать счёт</button>
          </div>
          
          :
           <table>
           <thead>
             <tr>
               <th>№</th>
               <th>Название счета</th>
               <th>Остаток</th>
               <th>Открыть счёт</th>
               <th>Удалить счёт</th>
             </tr>
           </thead>
           <tbody>
             {
               accountList.map((account, index) => {
                 return (
                   <tr key={account._id}>
                     <td>{index + 1}</td>
                     <td>{account.name}</td>
                     <td>{`${account.sum.toLocaleString()} ₽`}</td>
                     <td>Открыть</td>
                     <td>Удалить</td>
                   </tr>
                 )
               })
             }
           </tbody>
         </table>
          
      }
     
   </div>
  )
}