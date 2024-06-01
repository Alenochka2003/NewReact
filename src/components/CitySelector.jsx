import React from 'react';

function CitySelector({ cities, onSelectCity }) {
  return (
    <select onChange={(e) => onSelectCity(e.target.value)}>
      {cities.map((city, index) => (
        <option key={index} value={index}>
          {city.name}
        </option>
      ))}
    </select>
  );
}

export default CitySelector;