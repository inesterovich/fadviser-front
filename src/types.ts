import { ThunkAction, Action } from '@reduxjs/toolkit';
import { store } from './redux/store';

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



export type RegisterType = {
  name?: string,
  login: string,
  email: string,
  password: string,
  avatar?: string
}



export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> =
  ThunkAction<
    ReturnType,
    RootState, unknown, Action<string>
  >