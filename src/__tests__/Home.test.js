import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Pages/Home';
import PlanetsProvider from '../contexts/PlanetsProvider';

describe('verificar page App', () => {
  it('input de pesquisar por nome está funcionando',
    async () => {
      const { getByTestId, findByRole } = render(
        <PlanetsProvider>
          <Home />
        </PlanetsProvider>,
      );

      const searchInput = getByTestId(/name-filter/i);
      expect(searchInput).toBeInTheDocument();

      userEvent.type(searchInput, 'Tatooine');

      const planetTatooine = await findByRole('cell', { name: /tatooine/i });

      expect(planetTatooine).toBeInTheDocument();
    });

  it('input de pesquisar por número está funcionando',
    async () => {
      const { getByTestId } = render(
        <PlanetsProvider>
          <Home />
        </PlanetsProvider>,
      );

      const valueInput = getByTestId(/value-filter/i);
      expect(valueInput).toBeInTheDocument();

      userEvent.type(valueInput, '10000');

      const ONE_THOUSAND = 10000;

      expect(valueInput).toHaveValue(ONE_THOUSAND);
    });
});
