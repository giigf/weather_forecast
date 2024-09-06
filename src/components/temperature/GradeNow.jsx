import React, { useEffect, useState } from 'react';
import Clock from './Clock';

export default function GradeNow({ city }) {
  const [grade, setGrade] = useState([]);
  const [timezone,setTimezone] = useState();

  useEffect(() => {
    const fetchGrade = async () => {
      try {
        const response = await fetch(`http://localhost:3000/weather/${city}`);
        if (response.ok) {
          const data = await response.json();
          setGrade(data.main.temp);
          setTimezone(data.timezone)
        } else {
          console.error('Ошибка при загрузке списка API');
        }
      } catch (error) {
        console.error('Ошибка при загрузке списка API:', error);
      }
    };

    fetchGrade();
  });

  return (
    <div className="GradeNow">
        <h1 className='Color-White fs143'>{Math.round(grade - 273.15)}°</h1>
        <div className="City">
          <h1 className='Color-White fs60'>{city}</h1>
          <Clock timezone={timezone} />
        </div>   
        <div className='Cloudy'></div>
    </div>
  );
}
