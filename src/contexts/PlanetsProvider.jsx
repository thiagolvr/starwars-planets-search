import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const [planetsInfo, setPlanetsInfo] = useState([]);

  const contextValue = {
    planetsInfo,
    setPlanetsInfo,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default PlanetsProvider;
