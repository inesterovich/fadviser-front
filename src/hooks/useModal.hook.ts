import React, { useCallback, useState} from 'react';


export const useModal = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [modalData, setModalData] = useState<any>('');

  const openModalHandler = useCallback((data) => {
    
    setIsModalOpen(true);
    if (data) {
      setModalData(data);
    }
    
    
  }, []);

  return {
    isModalOpen,
    openModalHandler,
    modalData
  }
}