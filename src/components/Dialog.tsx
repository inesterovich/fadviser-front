import React from 'react';
import { ActionType } from '../types';

type DialogProps = {
  title: string,
  confirmation: string,
  actions: {
    submit: ActionType,
    cancel: ActionType
  }
}

export const Dialog: React.FC<DialogProps> = ({title, confirmation, actions}) => {
  
  return (
    <>
      <h2>{title}</h2>
      <div className="confirmation">
        <p className="confirmation-text">{confirmation }</p>
      </div>
      <div className="buttons-wrapper">
        <button type="button" onClick={actions.submit.action}>{actions.submit.buttonName}</button>
        <button type="button" onClick={actions.cancel.action}>{actions.cancel.buttonName }</button>
      </div>

     </>
  )
}