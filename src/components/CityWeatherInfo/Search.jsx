import React, { useState, useEffect } from 'react';

export default function Search({ onChange }) {
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, 300); // Задержка 300 мс

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  useEffect(() => {
    if (debouncedValue) {
      const fetchCities = async () => {
        try {
          const response = await fetch(`http://localhost:3000/cities/${debouncedValue}`);
          if (response.ok) {
            const data = await response.json();
            setCities(data);
          } else {
            setCities([]);
          }
        } catch (error) {
          setCities([]);
        }
      };
      fetchCities();
    }
  }, [debouncedValue]);

  const handleChange = (event) => {
    const selectedCity = event.target.value;
    setValue(selectedCity);
    onChange(selectedCity); // Передаем выбранное значение в родительский компонент
  }

  return (
    <div>
      <input
        className='inputCity'
        value={value}
        type="text"
        list="cities"
        onChange={handleChange}
        placeholder="Search Location..."
      />
      <datalist id="cities">
        {cities.map((name, index) => (
          <option key={index} value={name} />
        ))}
      </datalist>
    </div>
  );
}
