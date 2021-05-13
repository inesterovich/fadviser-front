import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux.hooks';
import { Loader } from '../../../../components/Loader';
import { CurrentAccountThunk } from '../../../../redux/app-modules/Accounting/AccountList/AccountList.thunk';
import { ModalContext } from '../../../../context/Modal.context';
import { OperationForm } from '../../../../components/Forms/OperationForm';
import { categoryOptions } from '../../../../content';
import { OperationValidationSchema } from '../../../../types';
import { addOperationThunk, updateOperationThunk, deleteOperationThunk  } from '../../../../redux/app-modules/Accounting/CurrentAccount/CurrentAccount.thunks';
import { Dialog } from '../../../../components/Dialog';
import './AccountDetail.styles.scss';
import { OperationSchema } from '../../../../validationSchemas';
import { ReactComponent as EditIcon } from '../../../../assets/images/edit-black.svg';
import { ReactComponent as DeleteIcon } from '../../../../assets/images/delete-black.svg';
import { ReactComponent as ExpensesIcon } from '../../../../assets/images/expenses.svg';
import { ReactComponent as IncomeIcon } from '../../../../assets/images/income.svg';


type ParamsType = {
  accountId: string
}

// Сумма считается категорически неправильно
export const AccountDetailPage: React.FC = () => {

  const dispatch = useAppDispatch();
  const isFetching = useAppSelector(state => state.accounts.isFetching);
  const userId = useAppSelector(state => state.authorization.authData?._id) as string;
  const token = useAppSelector(state => state.authorization.authData?.token) as string;
  const account = useAppSelector(state => state.accounts.account);

  const { openModalHandler, closeModalHandler } = useContext(ModalContext);

  const { accountId }:ParamsType = useParams();

  useEffect(() => {
      dispatch(CurrentAccountThunk(userId, accountId, token))
    }, [account._id, accountId, dispatch, token, userId]) 
 
  if (isFetching) {
    return <Loader />
  };

  let currentSum = 0;

  return (
    <div className="account">
      <h2>{account.name}</h2>
      
      <table className="operation-list-table">
      <thead>
             <tr>
               <th>№</th>
               <th>Дата</th>
               <th>Категория</th>
               <th><IncomeIcon title="Доходы" /></th>
               <th><ExpensesIcon title="Расходы" /></th>
               <th>Остаток</th>
               <th><EditIcon title="Изменить операцию" /></th>
               <th><DeleteIcon title="Удалить" /></th>
             </tr>
        </thead>
        <tbody>
          {

            account.operations?.map((operation, index) => {
              currentSum += operation.sum;
              
              return (
                <tr key={operation._id}>
                  <td>{ index + 1 }</td>
                  <td>{new Date(operation.date).toLocaleDateString()}</td>
                  <td>{operation.category }</td>
                  <td>{operation.operationType === 'Доход' ?
                    new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB'}).format(operation.sum) : ''}</td>
                  <td>{operation.operationType !== 'Доход' ?
                    new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB'}).format(operation.sum) : ''}</td>
                  <td>{ new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB'}).format(currentSum) }</td>
                  <td><EditIcon
                    className={index === 0 ? 'disabled-icon' : ''}
                    onClick={() => {
                    openModalHandler(
                    <OperationForm
                      title={`Изменить операцию`}
                      date={operation.date}
                      category={operation.category}
                      sum={operation.sum}
                      validationSchema={OperationSchema}
                      onSubmit={(values: OperationValidationSchema) => {
                        values._id = operation._id;
                        if (categoryOptions.income.values.indexOf(values.category) !== - 1) {
                          values.operationType = 'Доход';
                          values.sum = values.sum > 0 ? values.sum : -values.sum;
                        } else {
                          values.operationType = 'Расход';
                          values.sum = values.sum < 0 ? values.sum : -values.sum;
                        }
                        
                        dispatch(updateOperationThunk(values, userId, accountId, operation._id, token, closeModalHandler))
                      }}

                      />)
                  }
                  }
                      title="Изменить операцию" /></td>
                  <td>
                  <DeleteIcon
                        className={index === 0 ? 'disabled-icon' : ''}
                        onClick={() => {
                          openModalHandler(
                            <Dialog
                              title="Удалить операцию?"
                              confirmation="Вы собираетесь удалить операцию. Данное действие отменить НЕВОЗМОЖНО. Вы уверены?"
                              actions={{
                                cancel: {
                                  buttonName: 'Отмена',
                                  action: closeModalHandler
                                },
                                submit: {
                                  buttonName: 'Удалить',
                                  action: () => dispatch(deleteOperationThunk(userId, accountId, operation._id, token, closeModalHandler))
                                }
                              }}
                            />)
                        }}
                        title="Удалить" /> 
                  </td>
                </tr>
              )
            })
          }
      
      </tbody>
      </table>

      <button className="app-button" onClick={() => openModalHandler(
        <OperationForm
          title="Добавить операцию"
          date={new Date()}
          category="Заработная плата"
          sum={0}
          validationSchema={OperationSchema}
          onSubmit={async (values) => {
            if (categoryOptions.income.values.indexOf(values.category) !== - 1) {
              values.operationType = 'Доход';
              values.sum = values.sum > 0 ? values.sum : -values.sum;
            } else {
              values.operationType = 'Расход';
              values.sum = values.sum < 0 ? values.sum : -values.sum;
            }
            const submitValues = values as OperationValidationSchema;
          
            dispatch(addOperationThunk(submitValues, userId, accountId, token, closeModalHandler));
            
    
          }}
        />)}>Добавить операцию</button>
      
    </div>
  )
}