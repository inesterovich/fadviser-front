import React, { ChangeEventHandler, MouseEventHandler, useState, useRef } from 'react';
import {  useFormik } from 'formik';
import { ModalProps } from '../types';



interface ValuesIndexer  {
  [key: string]: string|number
}


export const Modal:React.FC<ModalProps> = ({ FormData, ModalData}) => {
  

  const [isOpen, setOpen] = useState(false);
  const { fields, validationSchema, onSubmit } = FormData;
  const { title, target, submitButton, closeButton, resetButton } = ModalData;


  const initialFormValues = fields.reduce((accumulator, currentValue, index) => {
  
    return {
      ...accumulator,
      [currentValue.fieldname]: currentValue.input?.initialValue,
    }
  }, {});

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit,
  });

  const openClickHandler:MouseEventHandler = () => setOpen(true);
  const closeClickHandler:MouseEventHandler = (e) => {
    formik.handleReset(e);
    setOpen(false);
  };

  


  return (
    <>
      <button className="btn" onClick={openClickHandler}>{ target}</button>
      <div className={`modal ${isOpen && 'open'}`}>
            <h2>{title}</h2>
        <form onSubmit={formik.handleSubmit} >
        <div className="fields-wrapper">
          
            {
              fields.map((field, key) => {
                const fieldValues: ValuesIndexer = formik.values;
          
                const fieldErrors: ValuesIndexer = formik.errors;
                
                const currentFieldError = fieldErrors[field.fieldname];
                return (
                  <p key={key}>
                    <label htmlFor={field.fieldname}>
                      {currentFieldError ? currentFieldError: field.label}
                    </label>
                  
                    
                    {field.input &&
                      <input
                        id={field.fieldname}
                        type={field.input.type}
                        name={field.fieldname}
                        value={fieldValues[field.fieldname]}
                        onChange={formik.handleChange}
                        placeholder={field.input.placeholder}
                        required={field.input.required}
                        autoComplete='off'
          
          
                      />}
                  </p>
                )
              })
            }
          
        </div>
     <div className="buttons-wrapper">
       
            <button type="submit">{ submitButton }</button>
            <button type="button" onClick={closeClickHandler}>{closeButton}</button>
       
     </div>
    </form>
    </div>
    </>
   
  )
}