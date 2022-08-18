import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

const Form = () => {
  const { filterByName: { name }, setFilterByName } = useContext(PlanetsContext);

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Search"
        value={ name }
        onChange={ ({ target: { value } }) => setFilterByName({ name: value }) }
      />
    </form>
  );
};

export default Form;
