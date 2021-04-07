import React from 'react';
import { useRoutes } from './routes';
import { Header } from './views/Header/Header';
import { Footer } from './views/Footer/Footer';
import { ModalContext } from './context/Modal.context';
import { useModal } from './hooks/useModal.hook';
import { HookedModal } from './components/HookedModal';

function App() {
  const routes = useRoutes(false);
  const { isModalOpen, openModalHandler, modalData  } = useModal();

  return (


    <ModalContext.Provider value={
      {
        modalState: isModalOpen,
        modalProps: modalData,
        openClickHandler: openModalHandler,
        closeClickHandler: () => {}
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
          <HookedModal />
        </div>
      </>
    </ModalContext.Provider>


  );
}

export default App;
