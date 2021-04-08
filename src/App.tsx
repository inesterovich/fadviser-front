import React from 'react';
import { useRoutes } from './routes';
import { Header } from './views/Header/Header';
import { Footer } from './views/Footer/Footer';
import { ModalContext } from './context/Modal.context';
import { useModal } from './hooks/useModal.hook';
import { Modal } from './components/Modal';

function App() {
  const routes = useRoutes();
  const { isModalOpen, openModalHandler, formData, modalData, closeModalHandler   } = useModal();

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
        <main>
          {routes}
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
