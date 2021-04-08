import React, { MouseEvent, useState, useContext } from 'react';
import { LinkPropTypes, FormDataType } from '../types';
import { AuthFieldContent, AuthModalContent, RegisterFieldContent, RegisterModalContent } from '../content';
import { useApDispatch, useAppSelector } from '../hooks/redux.hooks';
import { RegistrationThunk } from '../redux/Registation/Registration.thunks';
import { AuthorizationThunk } from '../redux/Authorization/Authorization.thunk';
import { AuthorisationSchema, RegistrationSchema } from '../validationSchemas';
import { NavLink } from 'react-router-dom';
import { ModalContext } from '../context/Modal.context';


type NavBarProps = {
  navClassName: string,
  logo?: {
    src: string,
    alt: string
  },
  links: LinkPropTypes[]
}

export const NavBar: React.FC<NavBarProps> = ({ navClassName, logo, links }) => {
  
  const isAuthenticated = !!useAppSelector(state => state.authorization.authData?.token);

  const dispatch = useApDispatch();

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const { openModalHandler } = useContext(ModalContext);

  const menuToogler = (event: MouseEvent) => {
    event.preventDefault();
    setMenuOpen(!isMenuOpen);
  }

  const RegisterFormData:FormDataType = {
    fields: RegisterFieldContent,
    validationSchema: RegistrationSchema,
    onSubmit: (values:any) => dispatch(RegistrationThunk(values))
  }
  
  const AuthFormData:FormDataType = {
    fields: AuthFieldContent,
    validationSchema: AuthorisationSchema,
    onSubmit: (values: any) => dispatch(AuthorizationThunk(values))
  }



  // запретить скролл - найти body, сохранить его в контекст

  
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
            }}>
              { link.text === 'Регистрация' ?
                <a href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    openModalHandler(RegisterFormData, RegisterModalContent)
                }}
                >{link.text}</a>
                :  link.text === 'Войти' ?
                <a href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    openModalHandler(AuthFormData, AuthModalContent)
                }}
                >{link.text}</a>
                : <NavLink to={link.to} >{link.text}</NavLink>
                
                }
              
              
            </li>
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
          }}>
            { link.text === 'Регистрация' ?
                <a href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    openModalHandler(RegisterFormData, RegisterModalContent)
                }}
                >{link.text}</a>
                : <NavLink to={link.to} >{link.text}</NavLink>}
              { link.text === 'Войти' ?
                <a href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    openModalHandler(AuthFormData, AuthModalContent)
                }}
                >{link.text}</a>
                : <NavLink to={link.to} >{link.text}</NavLink>}
              
            </li>
        ))
      }
        </ul>
      </div>
    </nav>
  ) 
}