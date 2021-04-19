import React from 'react';
import { useRoutes } from './routes';
import { Header } from './views/Header/Header';
import { Footer } from './views/Footer/Footer';
import { ModalContext } from './context/Modal.context';
import { useModal } from './hooks/useModal.hook';
import { Modal } from './components/Modal';
import { useAppSelector } from './hooks/redux.hooks';
import { AsideBar } from './components/AsideBar';
import { LinkConfig } from './content';

function App() {
  const routes = useRoutes();
  const { isModalOpen, openModalHandler, formData, modalData, closeModalHandler   } = useModal();
  const isAuthenticated = !!useAppSelector(state => state.authorization.authData?.token);
  // Нужен дефолтный текст модалки. Именно его и рендерить
  return (


    <ModalContext.Provider value={
      {
        isModalOpen,
        modalData,
        formData,
        openModalHandler: openModalHandler,
        closeModalHandler
      }}>
      <>
      <div className="App">
          <Header />
          {
            /*<main className="main">
            {isAuthenticated
              && <AsideBar className="aside" links={LinkConfig} />}
            {routes}
        </main>  */
          }

          <main className="main">
            {
              isAuthenticated ?
                <div className="main-content">
                <AsideBar className="aside" links={LinkConfig} />
                {routes}
                </div>
                : routes
            }
          </main>
          
        <Footer />
        </div>
        <div className="modals">
          <Modal />
        </div>
      </>
    </ModalContext.Provider>


  );
}

export default App;
