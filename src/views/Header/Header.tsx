import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.styles.scss'


type LinkConfigType = {
  name: string,
  to: string
}[]
export const Header: React.FC<{}> = () => {

  const LinkConfig: LinkConfigType = [
    {
    name: 'О платформе',
    to: '/about'
    },
    {
      name: 'Возможности',
      to: '/opportunities'
    },
    {
      name: 'Регистрация',
      to: '/register'
    },
    {
      name: 'Войти',
      to: '/login'
      },

  
  ]

  return (
    <header className="main-header">
      <nav className="main-nav">
      <div className="logo">
        Fadviser-logo
      </div>
        <ul className="main-nav-list">
          {
            LinkConfig.map((link, key) => (
              <li key={key}>
                <NavLink to={link.to}>{ link.name }</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}