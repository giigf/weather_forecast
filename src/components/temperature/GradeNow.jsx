import React, { useEffect, useState } from 'react';
import Clock from './Clock';

export default function GradeNow() {
  const [grade, setGrade] = useState([]);
  const [city, setCity] = useState();
  useEffect(() => {
    const fetchGrade = async () => {
      try {
        const response = await fetch('http://localhost:3000/weather/Almaty');
        if (response.ok) {
          const data = await response.json();
          setGrade(data.main.temp);
          setCity(data.name)
        } else {
          console.error('Ошибка при загрузке списка API');
        }
      } catch (error) {
        console.error('Ошибка при загрузке списка API:', error);
      }
    };

    fetchGrade();
  }, []);

  return (
    <div className="GradeNow">
        <h1 className='Color-White fs143'>{Math.round(grade - 273.15)}°</h1>
        <div className="City">
          <h1 className='Color-White fs60'>{city}</h1>
          <Clock />
        </div>   
        <div className='Cloudy'></div>
    </div>
  );
}
