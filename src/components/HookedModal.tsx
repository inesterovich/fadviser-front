import React, {useContext} from 'react';
import { ModalContext } from '../context/Modal.context';

export const HookedModal: React.FC = () => {
  
  const { modalState: isOpen, modalProps } = useContext(ModalContext);
  
  return (
    <div className={`modal ${isOpen ? 'open': ''}`}>
      <p>{ modalProps ? modalProps: 'Дефолтный текст' }</p>
    </div>
  )
}