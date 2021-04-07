import React, { useCallback, useState} from 'react';
import { FormDataType, ModalDataType } from '../types'
import { defaultFormContent, defaultModalContent } from '../content';

export const useModal = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(defaultFormContent);
  const [modalData, setModalData] = useState(defaultModalContent);

  const openModalHandler = useCallback((form:FormDataType, modal: ModalDataType) => {
    
    setModalData(modal)
    setFormData(form);
    setIsModalOpen(true);
    
    
  }, []);

  const closeModalHandler = () => {
    setFormData(defaultFormContent);
    setModalData(defaultModalContent);
    setIsModalOpen(false);
  }

  // Осталось сделать хендлер закрытия - через присвоение дефолтных значений.

  return {
    isModalOpen,
    openModalHandler,
    formData,
    modalData,
    closeModalHandler
  }
}