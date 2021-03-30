import React from 'react';
import { useRoutes } from './routes';
import { Header } from './views/Header/Header';
import { Footer } from './views/Footer/Footer';

function App() {
  const routes = useRoutes(false);

  return (
    <div className="App">
      <Header />
      <main>
        {routes}
      </main>
      <Footer />
    </div>
  );
}

export default App;
