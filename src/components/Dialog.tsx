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
    <section className="dialog">
      <div className="dialog-header"><h2>{title}</h2></div>
      
      <div className="dialog-main">
        {
          confirmation.split('.').map((sentence, key) => (<p className="dialog-text" key={key}>{sentence}</p>))
        }
      </div>
      <div className="dialog-footer">
        <button type="button" onClick={actions.submit.action}>{actions.submit.buttonName}</button>
        <button type="button" onClick={actions.cancel.action}>{actions.cancel.buttonName }</button>
      </div>

     </section>
  )
}