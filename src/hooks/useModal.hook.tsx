import React from 'react';
import { useCallback, useState } from 'react';

export const useModal = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultContent = <h3>Дефолтный текст</h3>
  const [ModalContent, setModalContent] = useState<JSX.Element>(defaultContent);
  const body = document.querySelector('body');

  const openModalHandler = useCallback((modalData: JSX.Element) => {
    if (!isModalOpen) {
      setModalContent(modalData);
      setIsModalOpen(true);
      
      body?.classList.add('unscrollable');
    }
   
  }, [body?.classList, isModalOpen]);

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setModalContent(defaultContent);
    body?.classList.remove('unscrollable');
  };

  

  // Осталось сделать хендлер закрытия - через присвоение дефолтных значений.

  return {
    isModalOpen,
    openModalHandler,
    ModalContent,
    closeModalHandler,
  }
}