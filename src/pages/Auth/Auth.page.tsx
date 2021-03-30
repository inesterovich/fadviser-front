import React from 'react';
import './Auth.styles.scss';
import logoUrl from '../../assets/images/fadviser.svg';
import { Card } from '../../components/Card';
import { cardsContent } from '../../cardsContent';



export const AuthPage:React.FC<{}> = () => {
  return (
    <>
      <section className="promo-section">
      <div className="text-container">
          <h1><img src={logoUrl} alt="Fadviser logo"  /></h1>
          <p>Платформа финансовых советов</p>
        </div>
      </section>
      <section id="#opportunities" className="opportunity-section">
          <h2>Возможности</h2>
        <div className="opportunity-wrapper">
          {
            cardsContent.map((card, key) => (
              <Card
                link={card.link}
                image={card.image}
                title={card.title}
                text={card.text} key={key} />
            ))
          }
        </div>

        <button className="btn">Присоединиться</button>

      </section>
  </>
)
}