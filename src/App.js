import { useState } from "react";
import CityWeatherInfo from "./components/CityWeatherInfo/CityWeatherInfo";
import GradeNow from "./components/temperature/GradeNow";

function App() {
  const [selectedCity, setSelectedCity] = useState(""); // Управление выбранным городом

  const handleCityChange = (city) => {
    setSelectedCity(city); // Передаем город из Search
  }

  return (
    <div className="App">
      <CityWeatherInfo onCityChange={handleCityChange} />  {/* Передаем колбэк в Search */}
      <GradeNow city={selectedCity} />  {/* Передаем выбранный город в GradeNow */}
    </div>
  );
}

export default App;
