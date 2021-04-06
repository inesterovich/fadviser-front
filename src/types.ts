import { ThunkAction, Action } from '@reduxjs/toolkit';
import { store } from './redux/store';
import { RegistrationSchema } from './validationSchemas';
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
  input?: {
    type: string,
    required?: boolean,
    initialValue: string
  }
 [index: string]: any
}


export type RegisterValidationType = yup.InferType<typeof RegistrationSchema>


export type FormDataType = {
  fields: Array<FormFieldType>,
  validationSchema: RegisterValidationType,
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

  ModalData: ModalDataType
}



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> =
  ThunkAction<
    ReturnType,
    RootState, unknown, Action<string>
  >