import React from 'react';
import './Footer.styles.scss';


export const Footer: React.FC<{}> = () => {
  return (
    <footer className="main-footer">
      <div className="footer-wrapper">
        <div className="copyright">
          <p>&copy; Fadviser 2020 - 2021</p>
        </div>
        <div className="credentials">
          <p className="author">Ilya Nesterovich</p>
          <a href="/link">GitHub</a>
        </div>
      </div>
     
    </footer>
  )
}