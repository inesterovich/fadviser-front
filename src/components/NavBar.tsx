import React, { MouseEvent, useState, useContext } from 'react';
import { LinkPropTypes, RegisterValidationType, AuthValidationType } from '../types';
import { AuthorizationSlice } from '../redux/Authorization/Authorization.slice';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hooks';
import { NavLink } from 'react-router-dom';
import { Form } from './Form';
import { RegisterFieldContent, AuthFieldContent } from '../content';
import { RegistrationSchema, AuthorisationSchema } from '../validationSchemas';
import { ModalContext } from '../context/Modal.context';
import { RegistrationThunk } from '../redux/Registation/Registration.thunks';
import { AuthorizationThunk } from '../redux/Authorization/Authorization.thunk';
import { AccountListSlice } from '../redux/app-modules/Accounting/AccountList/AccountList.slice';
import { CurrentAccountSlice } from '../redux/app-modules/Accounting/CurrentAccount/CurrentAccount.slice';
import { UserDataSlice } from '../redux/UserData/UserData.slice';
import { Link } from 'react-scroll';

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

  const { openModalHandler, closeModalHandler } = useContext(ModalContext)
  const dispatch = useAppDispatch();

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const { setAuthData } = AuthorizationSlice.actions;
  const { setAccounts } = AccountListSlice.actions;
  const { setAccount } = CurrentAccountSlice.actions;
  const { setUserInfo } = UserDataSlice.actions;

  const menuToogler = (event: MouseEvent) => {
    event.preventDefault();
    setMenuOpen(!isMenuOpen);
  }

  

  const RegisterContent = <Form
    title="Регистрация"
    fields={RegisterFieldContent}
    validationSchema={RegistrationSchema}
    actions={
      {
        submit: {
          buttonName: 'Зарегистрироваться',
          action: (values: RegisterValidationType) => dispatch(RegistrationThunk(values, closeModalHandler)),
        },
        close: {
          buttonName: 'Закрыть',
          action: closeModalHandler
        },
        reset: {
          buttonName: 'Очистить',
        },
      }
    } />
  
  const AuthContent = <Form
    title='Авторизация'
    fields={AuthFieldContent}
    validationSchema={AuthorisationSchema}
    actions={{
      submit: {
        buttonName: 'Отправить',
        action: (values:AuthValidationType) => dispatch(AuthorizationThunk(values, closeModalHandler))
      },
      close: {
        buttonName: 'Отмена',
        action: closeModalHandler
      },
      reset: {
        buttonName: 'Очистить'
      }
    }
    }
  
  />


  
  if (isAuthenticated) {

    const logoutHandler = (event:React.MouseEvent) => {
      event.preventDefault();
      dispatch(setAccounts([]));
      dispatch(setAccount({}));
      dispatch(setAuthData(undefined));
      dispatch(setUserInfo(undefined));
    }
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
              <li key={key} className={`${key === 0 ? 'disabled': ''}`}> {
                link.text === 'Выйти' ?
                  <a href="/logout" onClick={logoutHandler}>{ link.text }</a> :
                <NavLink to={link.to} >{link.text}</NavLink>
              }
                
              </li>
        ))
      }
      </ul>

      <div className="mobile-menu">
        <a href="/" className="dropdown" onClick={menuToogler}>Меню</a>
          <ul className={`mobile-menu-list ${isMenuOpen ? 'open' : ''}`} onClick={() => {
            setMenuOpen(false);
        }}>
        {
              links
                .slice()
                .filter(link => link.isAuth === true || link.isModule === true)
                .slice(1, 4)
                .map((link, key) => {
           
       
           
            return (

          <li key={key}>
            {
                link.text === 'Выйти' ?
                  <a href="/logout" onClick={logoutHandler}>{ link.text }</a> :
                <NavLink to={link.to} className={`${key === 0 ? 'disabled': ''}`}>{link.text}</NavLink>
              }
          
          </li>
          
                )}
                
              )
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
      
      <ul className="main-nav-list" >
        {
          links.slice().filter(link => !link.isAuth && !link.isModule).map((link, key) => (
            <li key={key}
            className={`${key === 0 ? 'disabled': ''}`}
            onClick={(event: MouseEvent<HTMLLIElement>) => {
            const linkTarget: HTMLElement = event.currentTarget.children[0] as HTMLElement;
            linkTarget.click();
            
            }}>
              { link.text === 'Регистрация' ?
                <a href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    openModalHandler(RegisterContent)
                }}
                >{link.text}</a>
                :  link.text === 'Войти' ?
                <a href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    openModalHandler(AuthContent)
                }}
                >{link.text}</a>
                  :  link.text === 'Возможности' ?
                  <Link to="opportunities" activeClass="active" spy={true} smooth={true} >{ link.text }</Link> :
                
                  <NavLink to={link.to} >{link.text}</NavLink>
                
                }
              
              
            </li>
        ))
      }
      </ul>

      <div className="mobile-menu">
        <a className="dropdown" href="/" onClick={menuToogler}>Меню</a>
        <ul className={`mobile-menu-list ${isMenuOpen ? 'open' : ''}`} onClick={() => {setMenuOpen(false)}}>
        {
        links.slice().filter(link => !link.isAuth && !link.isModule).map((link, key) => (
          <li key={key}
            className={`${key === 0 ? 'disabled': ''}`}
            onClick={(event: MouseEvent<HTMLLIElement>) => {
            const linkTarget: HTMLElement = event.currentTarget.children[0] as HTMLElement;
            linkTarget.click();
          }}>
            {

              link.text === 'Регистрация' ?
                <a href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    openModalHandler(RegisterContent)
                }}
                >{link.text}</a>
                :  link.text === 'Войти' ?
                <a href="/" 
                  onClick={(event) => {
                    event.preventDefault();
                    openModalHandler(AuthContent)
                }}
                >{link.text}</a>
                  : link.text === 'Возможности' ?
                    <Link to="opportunities" activeClass="active" spy={true} smooth={true} >{ link.text }</Link> :
                
                  <NavLink to={link.to} >{link.text}</NavLink>
                
                }
            </li>
        )
        
            )
      }
        </ul>
      </div>
    </nav>
  ) 
}