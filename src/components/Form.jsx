import React, { useContext, useState } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

const Form = () => {
  const [selected, setSelected] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const {
    filterByName: { name },
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(PlanetsContext);

  return (
    <form>

      <input
        data-testid="name-filter"
        type="text"
        placeholder="Search"
        value={ name }
        onChange={ ({
          target: { value: input },
        }) => setFilterByName({ name: input }) }
      />

      <select
        data-testid="column-filter"
        value={ selected.column }
        onChange={ ({
          target: { value: input },
        }) => setSelected({ ...selected, column: input }) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        value={ selected.comparison }
        onChange={ ({
          target: { value: input },
        }) => setSelected({ ...selected, comparison: input }) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        placeholder="0"
        value={ selected.value }
        onChange={ ({
          target: { value: input },
        }) => setSelected({ ...selected, value: input }) }
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setFilterByNumericValues(
          [...filterByNumericValues, selected],
        ) }
      >
        Filter
      </button>

    </form>
  );
};

export default Form;
