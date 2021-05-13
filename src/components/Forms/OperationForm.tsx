import React, { useContext } from 'react';
import { Form, Field, Formik, FormikProps } from 'formik';
import DatePicker from 'react-date-picker';
import { ModalContext } from '../../context/Modal.context';
import { categoryOptions } from '../../content';

 type InitialType = {
  date: Date,
  category: string,
  sum: number,
  operationType?: string,
}

type categoryPropTypes = {
  title: string,
  date: Date,
  category: string,
  sum: number,
  onSubmit: (...args: any) => void,
  validationSchema: any
}

export const OperationForm: React.FC<categoryPropTypes> = ({
  title = 'Добавить операцию',
  date = new Date(),
  category = ' Заработная плата', 
  sum = 0,
  onSubmit,
  validationSchema
  }) => {

  
  const { closeModalHandler } = useContext(ModalContext);
  
  return (
    <Formik
      initialValues={{
        date,
        category,
        sum,
      }
      }
     validationSchema={validationSchema}


      onSubmit={onSubmit}
      >
        
      {({ setFieldValue, values,
        errors, touched, handleChange }: FormikProps<InitialType>) => {

         
          return (
            <Form>
              <header className="form-header">
                <h2>{title}</h2>
              </header>
            <main className="form-main">
                
                <div className="field-wrapper">
                  <label>{ errors.date ? 'Некорректная дата' : 'Дата' }</label>
                  <DatePicker
                    
                    name="date"
                    format="dd-MM-yyyy"
                    value={new Date(values.date)}
                    clearIcon={null}
                    onChange={(value: Date | Date[] | string) => {
                    
                      setFieldValue('date', value);
                   
                    }}
                    
                  />
                </div>

              <div className="field-wrapper">
                  <label htmlFor="category">
                    {errors.category ? errors.category : 'Категория'}</label>
                  <select
                    name="category" id="category" onChange={handleChange}
                    value={values.category}
                   
                  >
                    {Object.keys(categoryOptions).map(key => (
                    
                      <optgroup key={key} label={categoryOptions[key].label}>
                        {
                          categoryOptions[key].values.map(option => (
                            <option
                              key={option}
                              value={option}
                
                            >{option}</option>
                          ))
                      }
                      </optgroup>
                    ))
                    }
                  </select>
              </div>
              
              <div className="field-wrapper">
                
                <label htmlFor="sum">{ errors.sum ? errors.sum : 'Сумма операции' }</label>
                <Field
                  id="sum"
                  name="sum"
                  type="number"
                  onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                      if (event.key === '-') {
                        event.preventDefault();
                      }
                  }}
                  value = {Math.abs(values.sum)}
               
                  />
              </div>
                

            </main>
              
              <footer className="form-footer">
                <button type="submit">Отправить</button>
                <button type="button" onClick={closeModalHandler}>Закрыть</button>
                <button type="reset">Очистить</button>
              </footer>
          </Form>
          )
        
        }}
    
    </Formik>
  )
}