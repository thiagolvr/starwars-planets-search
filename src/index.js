import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import PlanetsProvider from './contexts/PlanetsProvider';

ReactDOM.render(
  <PlanetsProvider>
    <Home />
  </PlanetsProvider>,
  document.getElementById('root'),
);
