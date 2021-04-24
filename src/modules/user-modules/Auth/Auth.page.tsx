import React, { useContext } from 'react';
import './Auth.styles.scss';
import logoUrl from '../../../assets/images/fadviser.svg';
import { Card } from '../../../components/Card';
import { cardsContent, RegisterFieldContent } from '../../../content';
import { ModalContext } from '../../../context/Modal.context';
import { Form } from '../../../components/Form';
import { RegistrationSchema } from '../../../validationSchemas';
import { RegistrationThunk } from '../../../redux/Registation/Registration.thunks';
import { RegisterValidationType } from '../../../types';
import { useApDispatch } from '../../../hooks/redux.hooks';


export const AuthPage: React.FC<{}> = () => {

  const { openModalHandler, closeModalHandler } = useContext(ModalContext);
  const dispatch = useApDispatch();
 
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
    }
  />
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

            <button type="button" onClick={() => openModalHandler(RegisterContent) }>Присоединиться</button>


      </section>
  </>
)
}