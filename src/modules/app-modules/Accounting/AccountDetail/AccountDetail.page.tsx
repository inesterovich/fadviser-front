import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useApDispatch, useAppSelector } from '../../../../hooks/redux.hooks';
import { Loader } from '../../../../components/Loader';
import { CurrentAccountThunk } from '../../../../redux/app-modules/Accounting/AccountList/AccountList.thunk';
import { ModalContext } from '../../../../context/Modal.context';
import { OperationForm } from '../../../../components/Forms/OperationForm';
import { categoryOptions } from '../../../../content';
import { OperationValidationSchema, OperationType } from '../../../../types';
import { addOperationThunk, updateOperationThunk, deleteOperationThunk  } from '../../../../redux/app-modules/Accounting/CurrentAccount/CurrentAccount.thunks';
import { Dialog } from '../../../../components/Dialog';

// Нужен UseEffect, useAppSelector, map, table
type ParamsType = {
  accountId: string
}

// Сумма считается категорически неправильно
export const AccountDetailPage: React.FC = () => {

  const dispatch = useApDispatch();
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
      
      <table>
      <thead>
             <tr>
               <th>№</th>
               <th>Дата</th>
               <th>Категория</th>
               <th>+</th>
               <th>-</th>
               <th>Остаток</th>
               <th>Изменить</th>
               <th>Удалить</th>
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
                  <td><button type="button"  onClick={() => {
                    
                    openModalHandler(
                    <OperationForm
                      title={`Изменить операцию`}
                      date={operation.date}
                      category={operation.category}
                      sum={operation.sum}
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
                  disabled={index === 0}
                  >Изменить</button></td>
                  <td>
                    <button
                      type="button"
                      disabled={index === 0}
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
                    
                    >Удалить </button>

                  </td>
                </tr>
              )
            })
          }
      
      </tbody>
      </table>

      <button onClick={() => openModalHandler(
        <OperationForm
          title="Добавить операцию"
          date={new Date()}
          category="Заработная плата"
          sum={0}
          onSubmit={ async (values) => {
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