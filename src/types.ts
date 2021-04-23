import { ThunkAction, Action } from '@reduxjs/toolkit';
import { store } from './redux/store';
import { RegistrationSchema, AuthorisationSchema, CreateAccountSchema } from './validationSchemas';
import * as yup from 'yup';


export type LinkPropTypes = {
  text: string,
  to: string,
  hash?: string,
  className?: string,
  activeClassName?: string,
  isAuth?: boolean,
  isModule?: boolean
}

export type LinkConfigType = LinkPropTypes[]

export type CardProps = {
  link: null | LinkPropTypes;
  image: ImgProps,
  title: string,
  text?: string,

}

export type ImgProps = {
  src: string,
  alt: string
}

export type inputFieldType = {
  type: string,
  required?: boolean,
  initialValue: string
}

export type FormFieldType  = {
  fieldname: string,
  label: string,
  input?: {
    type: string,
    required?: boolean,
    initialValue: string|number,
    placeholder: string
  }
 [index: string]: any
}

export interface AccountDataType  {
  _id: string,
  name: string,
  sum: number,
  operatins?: any,
  owner?: string,
}

export interface AccountExtendedDataType {
  _id?: string,
  name?: string,
  sum?: number
  operatins?: any,
  owner?: string,
}

export type RegisterValidationType = yup.InferType<typeof RegistrationSchema>
export type AuthValidationType = yup.InferType<typeof AuthorisationSchema>
export type CreateAccountValidationType = yup.InferType<typeof CreateAccountSchema>


export type FormDataType = {
  fields: Array<FormFieldType>,
  validationSchema: any,
  onSubmit: (values: any) => void
}


export type ModalDataType = {
  title: string,
  target: string,
  submitButton: string,
  closeButton: string,
  resetButton: string
}
export type ModalProps = {
  FormData: FormDataType,
  ModalData: ModalDataType,
}



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> =
  ThunkAction<
    ReturnType,
    RootState, unknown, Action<string>
  >