import React from 'react';

import { Link } from 'react-router-dom';
import { CardProps } from '../types';
import { useAppSelector } from '../hooks/redux.hooks';


export const Card: React.FC<CardProps> = ({ link, image, title, text, disabled }) => {
   
  const isAuthenticated = !!useAppSelector(state => state.authorization.authData?.token);

  const baseCard =
    <div className="card">
      <div className="card-image">
        <img src={image.src} alt={image.alt}/>
      </div>
      <div className="card-content">
        <h3>{ isAuthenticated ? link.text : title }</h3>
          {!isAuthenticated && text && <p>{ text }</p>}
      </div>
    </div>
  
   if (isAuthenticated && link) {
     return (
       <Link
         to={link.to}
         className={
           link.className ?
           `link-card ${link.className} ${disabled ? 'disabled': ''}` :
           `link-card ${disabled ? 'disabled': ''} `}>
         { baseCard }
      </Link>
     )
    }
  

  return (
    <>{ baseCard } </>
  )
}