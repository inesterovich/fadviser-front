import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux.hooks';
import { AccountListThunk, createAccountThunk } from '../../../../redux/app-modules/Accounting/AccountList/AccountList.thunk';
import { ModalContext } from '../../../../context/Modal.context';
import { Loader } from '../../../../components/Loader';
import { Dialog } from '../../../../components/Dialog';
import { DeleteAccountThunk } from '../../../../redux/app-modules/Accounting/AccountList/AccountList.thunk';
import { createAccountFieldContent } from '../../../../content';
import { CreateAccountSchema } from '../../../../validationSchemas';
import { Form } from '../../../../components/Form';
import { CreateAccountValidationType } from '../../../../types';
import { ReactComponent as OpenIcon } from '../../../../assets/images/open.svg';
import { ReactComponent as DeleteIcon } from '../../../../assets/images/delete-black.svg';
import './AccountList.styles.scss';

export const AccountListPage: React.FC = () => {

  const dispatch = useAppDispatch();
  const isFetching = useAppSelector(state => state.accounts.isFetching);
  const userId = useAppSelector(state => state.authorization.authData?._id) as string;
  const token = useAppSelector(state => state.authorization.authData?.token) as string;
  const accountList = useAppSelector(state => state.accounts?.accountList);
  const { openModalHandler, closeModalHandler } = useContext(ModalContext);
  
  useEffect(() => {   
    dispatch(AccountListThunk(userId, token))
 }, [dispatch, token, userId])

  
  if (isFetching) {
    return <Loader />
  }




  return (
    <div className="account-list">
    
      <h2>Ваши счета</h2>
      {
        accountList.length === 0 ?
        
        <>
          <p className="account-placeholder">Нет ни одного счёта</p>
          <button type="button" className="app-button" onClick={() => openModalHandler(
              <Form
                title="Создать счёт"
                fields={createAccountFieldContent}
                validationSchema={CreateAccountSchema}
                actions={{
                  close: {
                    buttonName: 'Закрыть',
                    action: closeModalHandler,
                  },
                  reset: {
                    buttonName: 'Очистить',
                  },
                  submit: {
                    buttonName: 'Создать',
                    action: (values:CreateAccountValidationType) => dispatch(createAccountThunk(accountList, values, userId, token, closeModalHandler ))
                  }
                }}
              />)}>Создать счёт</button>
          </>
          
          :
        <>
           <table className="account-list-table">
           <thead>
             <tr>
               <th>№</th>
               <th>Название счета</th>
               <th>Остаток</th>
               <th><OpenIcon title="Открыть" /></th>
               <th><DeleteIcon title="Удалить" /></th>
             </tr>
           </thead>
           <tbody>
             {
               accountList?.map((account, index) => {
                 return (
                   <tr key={account._id}>
                     <td>{index + 1}</td>
                     <td>{account.name}</td>
                     <td>{`${account.sum.toLocaleString()} ₽`}</td>
                     <td><Link to={`/accounts/${account._id}`}><OpenIcon title="Открыть" /></Link></td>
                     <td>
                       
                       <a href="/" onClick={(event) => {
                         event.preventDefault();
                         const DeleteAccountContent =
                           <Dialog
                             title="Удалить счёт?"
                             confirmation={
                               `Вы собираетесь удалить счёт: ${account.name}. Данную операцию отменить невозможно. Вы уверены?`}
                             actions={{
                               submit: {
                                 buttonName: 'Да',
                                 action: () => dispatch(DeleteAccountThunk(accountList, account._id, userId, token, closeModalHandler))
                               },
                               cancel: {
                                 buttonName: 'Нет',
                                 action: closeModalHandler
                               }
                             }}
                         />
                         
                       openModalHandler(DeleteAccountContent)

                     }}><DeleteIcon title="Удалить" /></a></td>
                   </tr>
                 )
               })
             }
           </tbody>
            </table>
            
            <button type="button" className="app-button" onClick={() => openModalHandler(
              <Form
                title="Создать счёт"
                fields={createAccountFieldContent}
                validationSchema={CreateAccountSchema}
                actions={{
                  close: {
                    buttonName: 'Закрыть',
                    action: closeModalHandler,
                  },
                  reset: {
                    buttonName: 'Очистить',
                  },
                  submit: {
                    buttonName: 'Создать',
                    action: (values:CreateAccountValidationType) => dispatch(createAccountThunk(accountList, values, userId, token, closeModalHandler ))
                  }
                }}
              />)}>Создать счёт</button>
        </>
        
      }

      

    
    
     
   </div>
  )
}