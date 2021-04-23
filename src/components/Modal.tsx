import React, { useContext } from 'react';
import {  useFormik } from 'formik';
import { ModalContext } from '../context/Modal.context';


interface ValuesIndexer  {
  [key: string]: string|number
}


export const Modal:React.FC = () => {
  
  const { isModalOpen, formData, modalData, closeModalHandler } = useContext(ModalContext);

  const { title, submitButton, closeButton  } = modalData;
  const { fields, validationSchema, onSubmit } = formData;

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


  return (
      <div className={`modal ${isModalOpen ? 'open': ''}`}>
           <h2>{title}</h2>
        {

        <form onSubmit={formik.handleSubmit} >
        <div className="fields-wrapper">
          
            {
              fields.map((field, key) => {
                const fieldValues: ValuesIndexer = formik.values;
          
                const fieldErrors: ValuesIndexer = formik.errors;
                
                const currentFieldError = fieldErrors[field.fieldname];
                return (
                  <p key={key}>
                    
                    
                    {field.input ?
                      <>
                    <label htmlFor={field.fieldname}>
                      {currentFieldError ? currentFieldError: field.label}
                    </label>
                      <input
                        id={field.fieldname}
                        type={field.input.type}
                        name={field.fieldname}
                        value={fieldValues[field.fieldname]|| ''}
                        onChange={formik.handleChange}
                        placeholder={field.input.placeholder}
                        required={field.input.required}
                        autoComplete='off'
          
                        />
                        
                    
                      </> : field.label
                    
                    
                    }
                  </p>
                )
              })
            }
          
        </div>
     <div className="buttons-wrapper">
       
            <button type="submit">{submitButton}</button>
            <button type="button" onClick={closeModalHandler}>{ closeButton }</button>
           
       
     </div>
    </form>

        }
           
    </div>

   
  )
}