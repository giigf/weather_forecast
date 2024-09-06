import React from 'react';
import Search from './Search';

export default function CityWeatherInfo({ onCityChange }) {
  return (
    <div className='WeatherInfo'>
      <Search onChange={onCityChange} />  {/* Передаем колбэк в Search */}
    </div>
  )
}
