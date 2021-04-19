import React from "react";
import { cardsContent } from '../../../content';
import './Dashboard.styles.scss';

export const DashBoardPage: React.FC<{}> = () => {
  return (
    <section className="dashboard">
      {
        cardsContent.map((card, key) => {
          return (
            <a href={card.link?.to} className="card" key={key}>
              <div className="card-image">
                <img
                  src={card.image.src}
                  alt={card.image.alt}
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{ card.title }</h3>
              </div>
            </a>
          )
        })
      }
    </section>
  )
}