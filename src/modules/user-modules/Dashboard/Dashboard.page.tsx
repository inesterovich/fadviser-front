import React from "react";
import { cardsContent } from '../../../content';
import { Card } from '../../../components/Card';
import './Dashboard.styles.scss';

export const DashBoardPage: React.FC<{}> = () => {
  return (
    <section className="dashboard">
      {
        cardsContent.map((card, key) => {
          return (
            <Card
              {...card}
              key={key}  />
          )
        })
      }
    </section>
  )
}