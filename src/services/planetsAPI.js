const planetsURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetsAPI = async () => {
  try {
    const response = await fetch(planetsURL);
    const { results } = await response.json();
    const planets = results.map(({ residents, ...rest }) => rest);
    return planets;
  } catch (error) {
    console.log(error);
  }
};

export default planetsAPI;
