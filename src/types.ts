import { ThunkAction, Action } from '@reduxjs/toolkit';
import { store } from './redux/store';

export type LinkPropTypes = {
  text: string,
  to: string,
  hash?: string,
  className?: string,
  activeClassName?: string
}

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

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> =
  ThunkAction<
    ReturnType,
    RootState, unknown, Action<string>
  >