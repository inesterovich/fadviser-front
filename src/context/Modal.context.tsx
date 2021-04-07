import React, { createContext } from 'react';

const noop = (modalData: any|undefined) => { }


export const ModalContext= createContext({
  modalState: false,
  modalProps: null,
  openClickHandler: noop,
  closeClickHandler: noop
  
})