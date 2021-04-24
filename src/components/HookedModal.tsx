import React, {useContext} from 'react';
import { ModalContext } from '../context/Modal.context';

export const HookedModal: React.FC = () => {
  
  const { isModalOpen: isOpen } = useContext(ModalContext);
  
  return (
    <div className={`modal ${isOpen ? 'open': ''}`}>
      <p> Дефолтный текст </p>
    </div>
  )
}