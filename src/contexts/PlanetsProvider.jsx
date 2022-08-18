import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const [planetsInfo, setPlanetsInfo] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  const contextValue = {
    planetsInfo,
    setPlanetsInfo,
    filterByName,
    setFilterByName,
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
