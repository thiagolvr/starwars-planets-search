import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../contexts/PlanetsContext';

const Table = () => {
  const { planetsInfo, filterByName } = useContext(PlanetsContext);

  return (
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
          planetsInfo
            .filter(({ name }) => name.toLowerCase()
              .includes(filterByName.name.toLowerCase()))
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
  );
};

Table.propTypes = {
  planetsInfo: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default Table;
