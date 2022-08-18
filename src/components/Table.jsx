import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../contexts/PlanetsContext';

const Table = () => {
  const {
    planetsInfo,
    filterByName,
    filteredPlanetsInfo,
    setFilteredPlanetsInfo,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(PlanetsContext);

  useEffect(() => {
    const filteredPlanetsByName = planetsInfo.filter(({ name }) => name.toLowerCase()
      .includes(filterByName.name.toLowerCase()));

    const planetsWithActiveFilters = filterByNumericValues
      .reduce((acc, filter) => acc
        .filter((planet) => (
          {
            'maior que': +planet[filter.column] > +filter.value,
            'menor que': +planet[filter.column] < +filter.value,
            'igual a': +planet[filter.column] === +filter.value,
          }[filter.comparison]
        )), filteredPlanetsByName);

    setFilteredPlanetsInfo(planetsWithActiveFilters);
  }, [planetsInfo, filterByName, setFilteredPlanetsInfo, filterByNumericValues]);

  const handleDeleteFilter = ({ target: { dataset: { id } } }) => {
    const activeFilters = filterByNumericValues.filter((filter) => filter.column !== id);
    setFilterByNumericValues(activeFilters);
  };

  return (
    <div>
      {
        filterByNumericValues.map(({ column, comparison, value }) => (
          <div key={ column } data-testid="filter">
            <span>{`${column} ${comparison} ${value}`}</span>
            <button
              data-id={ column }
              type="button"
              onClick={ ((e) => handleDeleteFilter(e)) }
            >
              delete
            </button>
          </div>
        ))
      }
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredPlanetsInfo
              .map(({
                climate,
                created,
                diameter,
                films,
                gravity,
                name,
                orbital_period: orbital,
                population,
                rotation_period: rotation,
                surface_water: surface,
                terrain,
                url,
                edited,
              }) => (
                <tr key={ name }>
                  <td>{name}</td>
                  <td>{rotation}</td>
                  <td>{orbital}</td>
                  <td>{diameter}</td>
                  <td>{climate}</td>
                  <td>{gravity}</td>
                  <td>{terrain}</td>
                  <td>{surface}</td>
                  <td>{population}</td>
                  <td>{films.map((film) => film)}</td>
                  <td>{created}</td>
                  <td>{edited}</td>
                  <td>{url}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  planetsInfo: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default Table;
