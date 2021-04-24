import React , { createContext } from 'react';


type ModalContextType = {
  isModalOpen: boolean,
  ModalContent: JSX.Element,
  openModalHandler: (data:JSX.Element) => void,
  closeModalHandler: () => void
}

const initialContext:ModalContextType = {
  isModalOpen: false,
  ModalContent: <h3>Дефолтный текст</h3>,
  openModalHandler: () => {},
  closeModalHandler: () => {}
  
}

export const ModalContext= createContext(initialContext)