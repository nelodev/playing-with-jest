const cities = ['Mexico', 'Valencia', 'Bogota', 'Lima', 'Buenos Aires'];

const getRandomCity = () => {
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  return randomCity;
};

module.exports = getRandomCity;
