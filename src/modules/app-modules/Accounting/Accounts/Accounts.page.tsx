import React, { useEffect, useContext } from 'react';
import { useAppSelector, useApDispatch } from '../../../../hooks/redux.hooks';
import { AccountListThunk, createAccountThunk } from '../../../../redux/app-modules/Accounting/AccountList/AccountList.thunk';
import { ModalContext } from '../../../../context/Modal.context';
import { FormDataType, ModalDataType } from '../../../../types';
import { createAccountFieldContent } from '../../../../content';
import { createAccountSchema } from '../../../../validationSchemas';



export const AccountsPage: React.FC = () => {

  const dispatch = useApDispatch();
  const isFetching = useAppSelector(state => state.accounts.isFetching);
  const userId = useAppSelector(state => state.authorization.authData?._id) as string;
  const token = useAppSelector(state => state.authorization.authData?.token) as string;
  const accountList = useAppSelector(state => state.accounts.accountList);
  const { openModalHandler, closeModalHandler } = useContext(ModalContext);
  
  useEffect(() => {   
    dispatch(AccountListThunk(userId, token))
 }, [dispatch, token, userId])


  const AccountFormData: FormDataType = {
    fields: createAccountFieldContent,
    validationSchema: createAccountSchema,
    onSubmit: (values) => dispatch(createAccountThunk(accountList, values, userId, token, closeModalHandler))
  }

  const ModalData: ModalDataType = {
    title: 'Создать счёт',
    closeButton: 'Закрыть',
    resetButton: 'Очистить',
    submitButton: 'Создать',
    target: 'Создать'
  }

// Надо дробить на большее число компонентов. Лодер вынести отдельно. Таблицу отдельно. И передавать пропсами
// Проблема с первичным стейтом. 
  return (
    <div className="account-list">
      {
        isFetching ? <h3>Loading</h3> :
          <>
          
      <h2>Ваши счета</h2>
      {
        accountList.length === 0 ?
        
        <div className="account-list">
          <p>Нет ни одного счёта</p>
            <button type="button" onClick={() => openModalHandler(AccountFormData, ModalData)}>Создать счёт</button>
          </div>
          
          :
        <>
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
            
          <button type="button" onClick={() => openModalHandler(AccountFormData, ModalData)}>Создать счёт</button>
        </>
        
          
      }
          </>
}
      

    
    
     
   </div>
  )
}