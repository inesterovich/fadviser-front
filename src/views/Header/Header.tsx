import React from 'react';
import { NavLink } from 'react-router-dom';
import logoUrl from '../../assets/images/fadviser.svg';

import './Header.styles.scss'
import {  LinkPropTypes } from '../../types';


type LinkConfigType = LinkPropTypes[];
export const Header: React.FC<{}> = () => {

  const LinkConfig: LinkConfigType = [
    {
      text: 'О платформе',
      to: '/',
      hash: '#about'
    },
    {
      text: 'Возможности',
      to: '/',
      hash: '#opportunities'
    },
    {
      text: 'Регистрация',
      to: '/register'
    },
    {
      text: 'Войти',
      to: '/login'
      },

  
  ]

  return (
    <header className="main-header">
      <nav className="main-nav">
      <div className="logo">
       <img className="logo-img" src={logoUrl} alt="Fadviser Logo" />
      </div>
        <ul className="main-nav-list">
          {
            LinkConfig.map((link, key) => (
              <li key={key}>
                <NavLink to={link.to}>{ link.text }</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}