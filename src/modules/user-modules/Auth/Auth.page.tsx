import React, { useContext, useEffect} from 'react';
import './Auth.styles.scss';
import logoUrl from '../../../assets/images/fadviser.svg';
import { Card } from '../../../components/Card';
import { cardsContent } from '../../../content';
import { RegisterFieldContent, RegisterModalContent } from '../../../content';
import { FormDataType} from '../../../types';
import { RegistrationSchema } from '../../../validationSchemas';
import { RegistrationThunk } from '../../../redux/Registation/Registration.thunks';
import { RegistrationSlice } from '../../../redux/Registation/Registration.slice';
import { useApDispatch, useAppSelector } from '../../../hooks/redux.hooks';
import { ModalContext } from '../../../context/Modal.context';



export const AuthPage: React.FC<{}> = () => {

  const isRegistered = useAppSelector(state => state.register?.registered);

  const { setRegistered } = RegistrationSlice.actions;
  
  const dispatch = useApDispatch();
  const { openModalHandler, closeModalHandler } = useContext(ModalContext);

  const RegisterFormData:FormDataType = {
    fields: RegisterFieldContent,
    validationSchema: RegistrationSchema,
    onSubmit: (values:any) => dispatch(RegistrationThunk(values))
  }


  useEffect(() => {
    if (isRegistered) {
      closeModalHandler();
      dispatch(setRegistered(false));
    };
  }, [closeModalHandler, dispatch, isRegistered, setRegistered]) 






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

            <button type="button" onClick={() => openModalHandler(RegisterFormData, RegisterModalContent) }>Присоединиться</button>

       


        

      </section>
  </>
)
}