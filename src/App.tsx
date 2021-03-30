import React from 'react';
import { useRoutes } from './routes';
import { Header } from './views/Header/Header';

function App() {
  const routes = useRoutes(false);

  return (
    <div className="App">
      <Header />
      <main>
        {routes}
      </main>
      
    </div>
  );
}

export default App;
