import React, { useContext } from 'react';
import { ModalContext } from '../context/Modal.context';
import { ModaProps } from '../types';



export const Modal:React.FC<ModaProps> = ({ ModalContent, ActionButtons}) => {
  
  const { isModalOpen } = useContext(ModalContext);



  return (
      <div className={`modal ${isModalOpen ? 'open': ''}`}>
      <div className="modal-content">
          {ModalContent}
      </div>
      { ActionButtons && ActionButtons}
    </div>

   
  )
}