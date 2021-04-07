import { createContext } from 'react';
import { ModalDataType, FormDataType } from '../types';
import { defaultModalContent, defaultFormContent } from '../content'


type ModalContextType = {
  isModalOpen: boolean,
  modalData: ModalDataType ,
  formData: FormDataType,
  openModalHandler: (form: any, modal?: any) => void,
  closeModalHandler: () => void
}

const initialContext:ModalContextType = {
  isModalOpen: false,
  modalData: defaultModalContent,
  formData: defaultFormContent,
  openModalHandler: (form, modal) => {},
  closeModalHandler: () => {}
  
}

export const ModalContext= createContext(initialContext)