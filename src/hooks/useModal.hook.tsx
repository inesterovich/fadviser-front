import React from 'react';
import { useCallback, useState } from 'react';

export const useModal = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultContent = <h3>Дефолтный текст</h3>
  const [ModalContent, setModalContent] = useState<JSX.Element>(defaultContent);

  const openModalHandler = useCallback((modalData:JSX.Element) => {
    if (!isModalOpen) {
      setModalContent(modalData);
      setIsModalOpen(true);
    }
   
  }, [isModalOpen])

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setModalContent(defaultContent);
  }

  // Осталось сделать хендлер закрытия - через присвоение дефолтных значений.

  return {
    isModalOpen,
    openModalHandler,
    ModalContent,
    closeModalHandler
  }
}