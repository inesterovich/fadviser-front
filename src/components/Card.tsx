import React from 'react';

import { Link } from 'react-router-dom';
import { CardProps } from '../types'


export const Card: React.FC<CardProps> = ({ link, image, title, text }) => {
   
  // Мне нужны данные картинки - меняется только src и alt

  const baseCard =
    <div className="card">
      <div className="card-image">
        <img src={image.src} alt={image.alt}/>
      </div>
      <div className="card-content">
        <h3>{ title }</h3>
          {text && <p>{ text }</p>}
      </div>
    </div>

   if (link) {
     return (
       <Link
         to={link.to}
         className={
           link.className ?
           `link-card ${link.className}` :
           'link-card'}>
         { baseCard }
      </Link>
     )
    }
  

  return (
    <>{ baseCard } </>
  )
}