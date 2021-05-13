import React from 'react';
import { useCallback, useState } from 'react';
import disableScroll from 'disable-scroll';


export const useModal = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultContent = <h3>Дефолтный текст</h3>
  const [ModalContent, setModalContent] = useState<JSX.Element>(defaultContent);
 

  const openModalHandler = useCallback((modalData: JSX.Element) => {
    setModalContent(modalData);
    setIsModalOpen(true);
    disableScroll.on();
 
  }, []);

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setModalContent(defaultContent);
    disableScroll.off();
  };

  return {
    isModalOpen,
    openModalHandler,
    ModalContent,
    closeModalHandler,
  }
}