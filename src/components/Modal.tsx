import React from 'react';
import {  useFormik } from 'formik';
import { FormFieldType } from '../types';


type ModalProps = {
  FormData: {
    fields: Array<FormFieldType>,
    onSubmit: (values: any) => void
  },

  ModalData?: {
    title: string,
    target: string,
    closeButton: string,
    resetButton: string
  }
}

interface ValuesIndexer  {
  [key: string]: string|number
}

export const Modal = ({ FormData, ModalData}: ModalProps) => {
  

  const { fields, onSubmit } = FormData;

  const initialFormValues = fields.reduce((accumulator, currentValue, index) => {
  
    return {
      ...accumulator,
      [currentValue.fieldname]: currentValue.input?.initialValue,
    }
  }, {});

  const formik = useFormik({
    initialValues: initialFormValues,
    onSubmit
  })

  


  return (
    <div className="modal">
      <form onSubmit={formik.handleSubmit} >
        {
          fields.map((field, key) => {

            const fieldValues: ValuesIndexer = formik.values;
            

            return (
              <p key={key}>
                <label htmlFor={field.fieldname}>
                  {field.fieldname}
                </label>
                {field.input &&
                  <input
                    id={field.fieldname}
                    type={field.input.type}
                  name={field.fieldname}
                  value={fieldValues[field.fieldname]}
                  onChange={formik.handleChange}
                  autoComplete='off'
                  
                  
                  />}
              </p>
            )
          })
        }
     
        <button type="submit">Зарегистрироваться</button>
    </form>
    </div>
  )
}