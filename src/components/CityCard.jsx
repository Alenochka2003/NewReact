import React from 'react';

function CityCard({ city }) {
  if (!city) return <div>Выберите город для отображения информации.</div>;

  return (
    <div className='CitysCards'>
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name} />
      <p>{city.description}</p>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;