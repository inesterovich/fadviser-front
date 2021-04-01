import React from 'react';
import logoUrl from '../../assets/images/fadviser.svg';
import { NavBar } from '../../components/NavBar';
import { LinkConfig } from '../../cardsContent';

import './Header.styles.scss'



export const Header: React.FC<{}> = () => {

 

  return (
    <header className="main-header">
      <NavBar
        navClassName="main-nav"
        logo={{ src: logoUrl, alt: 'Fadviser logo' }}
        links={LinkConfig}
      />
    </header>
  )
}