import React, { useContext } from 'react';
import { ModalContext } from '../context/Modal.context';
import { ModaProps } from '../types';



export const Modal:React.FC<ModaProps> = ({ ModalContent, ActionButtons}) => {
  
  const { isModalOpen, closeModalHandler } = useContext(ModalContext);


  return (
    <>
    <div className={`overlay ${isModalOpen ? 'open': ''}`} onClick={closeModalHandler}> 
      </div>
      <div className={`modal ${isModalOpen ? 'open': ''}`}>
        <div className="modal-content">
          {ModalContent}
        </div>
      { ActionButtons && ActionButtons}
      </div>
      </>
     
   
  )
}