import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useRoutes } from './routes';

function App() {
  const routes = useRoutes(true);

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
