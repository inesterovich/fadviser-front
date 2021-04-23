import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useApDispatch } from '../../../../hooks/redux.hooks';
import { AccountListThunk, createAccountThunk, deleteAccountThunk } from '../../../../redux/app-modules/Accounting/AccountList/AccountList.thunk';
import { ModalContext } from '../../../../context/Modal.context';
import { FormDataType, ModalDataType, FormFieldType } from '../../../../types';
import { createAccountFieldContent } from '../../../../content';
import { CreateAccountSchema } from '../../../../validationSchemas';
import { Loader } from '../../../../components/Loader';



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

  
  if (isFetching) {
    return <Loader />
  }

  const AccountFormData: FormDataType = {
    fields: createAccountFieldContent,
    validationSchema: CreateAccountSchema,
    onSubmit: (values) => dispatch(createAccountThunk(accountList, values, userId, token, closeModalHandler))
  }

  const AccountModalData: ModalDataType = {
    title: 'Создать счёт',
    closeButton: 'Закрыть',
    resetButton: 'Очистить',
    submitButton: 'Создать',
    target: 'Создать'
  }


  return (
    <div className="account-list">
    
      <h2>Ваши счета</h2>
      {
        accountList.length === 0 ?
        
        <div className="account-list">
          <p>Нет ни одного счёта</p>
            <button type="button" onClick={
              () => openModalHandler(AccountFormData, AccountModalData)}>Создать счёт</button>
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
                     <td><Link to={`/accounts/${account._id}`}>Открыть</Link></td>
                     <td>
                       
                       <button onClick={() => {

                       const deletedAccountFieldContent: Array<FormFieldType> = [{
                        fieldname: 'confirmation',
                        label: `Вы собираетесь удалить счёт: ${account.name}. Данную операцию отменить невозможно`
                       }]
                         
                       const deleteAccountModalContent: ModalDataType = {
                        target: 'Удалить',
                        title: `Удалить счёт: ${account.name}`,
                        submitButton: 'Удалить',
                        closeButton: 'Отмена',
                        resetButton: 'Очистить'
                      }
                       const deleteAccountFormData: FormDataType = {
                        fields: deletedAccountFieldContent,
                        onSubmit: () => dispatch(deleteAccountThunk(accountList, account._id, userId, token, closeModalHandler))
                      }
                       openModalHandler(deleteAccountFormData, deleteAccountModalContent)

                     }}>Удалить</button></td>
                   </tr>
                 )
               })
             }
           </tbody>
            </table>
            
            <button type="button"
              onClick={() => openModalHandler(AccountFormData, AccountModalData)
              }>Создать счёт</button>
        </>
        
      }

      

    
    
     
   </div>
  )
}