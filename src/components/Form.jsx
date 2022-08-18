import React, { useContext, useState, useEffect } from 'react';
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

  const activeFilterColumns = filterByNumericValues.map((filter) => filter.column);

  const columnsDynamic = [
    'population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water',
  ].filter((column) => !activeFilterColumns.includes(column));

  useEffect(() => {
    setSelected({
      column: columnsDynamic[0],
      comparison: 'maior que',
      value: '0',
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues]);

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
        onChange={ ({
          target: { value: input },
        }) => setSelected({ ...selected, column: input }) }
      >
        {
          columnsDynamic.map((column, index) => (
            <option key={ index } value={ column }>{column}</option>
          ))
        }
      </select>

      <select
        data-testid="comparison-filter"
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

      <button
        data-testid="button-remove-filters"
        type="button"
        disabled={ !filterByNumericValues.length }
        onClick={ () => setFilterByNumericValues([]) }
      >
        Delete Active Filters
      </button>

    </form>
  );
};

export default Form;
