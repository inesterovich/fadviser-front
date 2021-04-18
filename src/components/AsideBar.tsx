import React from 'react';
import { NavLink,  useLocation } from 'react-router-dom';
import { LinkPropTypes } from  '../types';

type AsideBarProps = {
  className: string,
  links: LinkPropTypes[]
}

export const AsideBar: React.FC<AsideBarProps> = ({ className, links }) => {
  const location = useLocation();
  
  return (
    <aside className={className}>
      <nav className="aside-nav">
        <ul>
        {links
        .slice()
        .filter(item => item.isModule === true)
        .map((link, key) => {
          return (
            <li key={key}
              className={
                location.pathname === link.to ?
                  "aside-item active" :
                  "aside-item"
                  }>
              <NavLink
                to={link.to} className="aside-link"
              >{link.text}</NavLink>
            </li>
          )
        })
      }
        </ul>


      </nav>
 
    </aside>
  )
}