import React from 'react';
import { useFormik } from 'formik';
import { FormFieldType, ActionType } from '../types';


type ResetActionType = {
  buttonName: string
}

type FormActionsType = {
  submit: ActionType,
  close: ActionType,
  reset: ResetActionType,

}

type FormProps = {
  title: string,
  fields: FormFieldType[],
  validationSchema: any,
  actions: FormActionsType
}

type ValuesIndexer =  {
  [key: string]: string|number
}

type BooleanIndexer = {
  [key: string]: boolean|undefined;
}

export const Form: React.FC<FormProps> = ({title, fields, validationSchema, actions}) => {
  const initialValues = fields.reduce((accumulator, currentValue) => {
    return {
      ...accumulator,
      [currentValue.fieldname]: currentValue.input?.initialValue,
    }
  }, {});

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: actions.submit.action
  })
 
 
  return (
    
      <form onSubmit={formik.handleSubmit} onReset={() => formik.resetForm()} >
        <header className="form-header">
          <h2>{title}</h2>
          </header>
        <main className="form-main">
            {
              fields.map((field) => {
                const fieldValues: ValuesIndexer = formik.values;
          
                const fieldErrors: ValuesIndexer = formik.errors;
                const currentFieldError = fieldErrors[field.fieldname];
                const touchedFields: BooleanIndexer = formik.touched;
                const isFieldTouched = touchedFields[field.fieldname];
          
                return (
                  <div key={field.fieldname} className="field-wrapper">
                    <label
                      htmlFor={field.fieldname}
                      className={currentFieldError && isFieldTouched ? 'error' : ''}>
                        {currentFieldError && isFieldTouched ? currentFieldError: field.label}
                      </label>
                        <input
                          id={field.fieldname}
                          type={field.input.type}
                          name={field.fieldname}
                          value={fieldValues[field.fieldname]|| ''}
                          onChange={(event) => {
                            formik.setFieldTouched(field.fieldname, true)
                            formik.handleChange(event);
                          }}
                          placeholder={field.input.placeholder}
                          required={field.input.required}
                          autoComplete='off'
          
                          />
                  </div>
                )
              })
               }
          </main>
        <footer className="form-footer">
            <button type="submit">{actions.submit.buttonName}</button>
            <button type="button" onClick={actions.close.action}>{ actions.close.buttonName }</button>
            <button type="reset">{ actions.reset.buttonName}</button>
          </footer>
    </form>
    
  )
}