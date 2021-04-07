import React, {useRef} from 'react';
import './Auth.styles.scss';
import logoUrl from '../../assets/images/fadviser.svg';
import { Card } from '../../components/Card';
import { cardsContent } from '../../content';
import { Modal } from '../../components/Modal';
import { RegisterFieldContent, AuthFieldContent } from '../../content';
import { FormDataType, ModalDataType, RegisterValidationType, AuthValidationType } from '../../types';
import { RegistrationSchema, AuthorisationSchema } from '../../validationSchemas';
import { RegistrationThunk } from '../../redux/Registation/Registration.thunks';
import { useApDispatch } from '../../hooks/redux.hooks';



export const AuthPage: React.FC<{}> = () => {
  
  const dispatch = useApDispatch();
  
  const RegisterFormData:FormDataType = {
    fields: RegisterFieldContent,
    validationSchema: RegistrationSchema,
    onSubmit: (values:any) => dispatch(RegistrationThunk(values))
  }

  const RegisterModalContent:ModalDataType = {
    title: 'Регистрация',
    target: 'Присоединиться',
    submitButton: 'Зарегистрироваться',
    closeButton: 'Закрыть',
    resetButton: 'Очистить'

  }

  const AuthFormData:FormDataType = {
    fields: AuthFieldContent,
    validationSchema: AuthorisationSchema,
    onSubmit: () => console.log('ready')
  }

  /* С рефами не парюсь. Делаю копии модалок и всё на этом
    Погоди-ка. Авторизации так-то у меня вообще нет модалки. Если делать рефы, но неплохо их в app вынести, и туда все модалки. А сами рефы - в Redux класть?
  
  */

 /*  Попробовать завтра прикрутить рефы: 3 параметр*/
  const AuthModalContent:ModalDataType = {
    title: 'Авторизация',
    target: 'Войти',
    submitButton: 'Войти',
    closeButton: 'Закрыть',
    resetButton: 'Очистить'
    
  }

  /*  Модалка есть. После регистрации модалку можно закрыть. Сделать useEffect с таймаутом и очисткой сообщения
    Анмаунтингом не увлекаюсь. Будут две модалки. Одна для регистрации, вторая для авторизации
  
  */



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

        <Modal
          FormData={RegisterFormData}
          ModalData={RegisterModalContent}
        />


        

      </section>
  </>
)
}