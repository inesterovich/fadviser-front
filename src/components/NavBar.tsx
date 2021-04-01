import React, { MouseEvent, useState } from 'react';
import { LinkPropTypes } from '../types';
import { NavLink } from 'react-router-dom';


type NavBarProps = {
  navClassName: string,
  logo?: {
    src: string,
    alt: string
  },
  links: LinkPropTypes[]
}

export const NavBar: React.FC<NavBarProps> = ({ navClassName, logo, links }) => {
  
  const isAuthenticated: boolean = false;

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const menuToogler = (event: MouseEvent) => {
    event.preventDefault();
    setMenuOpen(!isMenuOpen);
  }

  
  if (isAuthenticated) {

    const mainLinks = links.slice().filter(link => link.isAuth === true);
    return (
      <nav className={navClassName}>
      {logo &&
        <div className="logo">
        <img className="logo-img" src={logo.src} alt={logo.alt}/>
        </div>}
      
      <ul className="main-nav-list">
          {
            
        mainLinks.map((link, key) => (
          <li key={key}><NavLink to={link.to} >{ link.text }</NavLink> </li>
        ))
      }
      </ul>

      <div className="mobile-menu">
        <a href="/" onClick={menuToogler}>Меню</a>
        <ul className={`mobile-menu-list ${isMenuOpen ? 'open' : ''}`}>
        {
        links.slice().filter(link => link.isAuth === true || link.isModule === true).map((link, key) => (
          <li key={key}><NavLink to={link.to} >{ link.text }</NavLink> </li>
        ))
      }
        </ul>
      </div>
    </nav>
    )
  }


  return (
    <nav className={navClassName}>
      {logo &&
        <div className="logo">
        <img className="logo-img" src={logo.src} alt={logo.alt}/>
        </div>}
      
      <ul className="main-nav-list">
        {
        links.slice().filter(link => !link.isAuth && !link.isModule).map((link, key) => (
          <li key={key} onClick={(event: MouseEvent<HTMLLIElement>) => {
            const linkTarget: HTMLElement = event.currentTarget.children[0] as HTMLElement;
            linkTarget.click();
          }}><NavLink to={link.to} >{ link.text }</NavLink> </li>
        ))
      }
      </ul>

      <div className="mobile-menu">
        <a className="dropdown" href="/" onClick={menuToogler}>Меню</a>
        <ul className={`mobile-menu-list ${isMenuOpen ? 'open' : ''}`}>
        {
        links.slice().filter(link => !link.isAuth && !link.isModule).map((link, key) => (
          <li key={key} onClick={(event: MouseEvent<HTMLLIElement>) => {
            const linkTarget: HTMLElement = event.currentTarget.children[0] as HTMLElement;
            linkTarget.click();
          }}><NavLink to={link.to} >{ link.text }</NavLink> </li>
        ))
      }
        </ul>
      </div>
    </nav>
  ) 
}