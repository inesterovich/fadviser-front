import React, {useContext} from 'react';
import { ModalContext } from '../context/Modal.context';

export const HookedModal: React.FC = () => {
  
  const { isModalOpen: isOpen, modalData } = useContext(ModalContext);
  
  return (
    <div className={`modal ${isOpen ? 'open': ''}`}>
      <p>{ modalData ? modalData: 'Дефолтный текст' }</p>
    </div>
  )
}