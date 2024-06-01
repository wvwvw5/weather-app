import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './App.test';
import SearchBar from './SearchBar';
import WeeklyForecast from './WeeklyForecast';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weeklyForecast, setWeeklyForecast] = useState(null);
  const [city, setCity] = useState(''); 
  const [background, setBackground] = useState('default');

  const baseCities = ['London', 'New York', 'Tokyo', 'Moscow', 'Sydney'];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getCurrentWeather(lat, lon);
    });
  }, []);

  useEffect(() => {
    if (city) {
      getWeatherByCity(city);
    }
  }, [city]);

  const getCurrentWeather = async (latitude, longitude) => {
    const apiKey = '381cdf7aa2e3c4ccfe63d4b7fbe5f26d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCurrentWeather(data);
      setWeatherBackground(data.weather[0].main);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  const getWeatherByCity = async (city) => {
    const apiKey = '381cdf7aa2e3c4ccfe63d4b7fbe5f26d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCurrentWeather(data);
      setWeatherBackground(data.weather[0].main);
      getWeeklyForecast(data.coord.lat, data.coord.lon);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  const getWeeklyForecast = async (latitude, longitude) => {
    const apiKey = '381cdf7aa2e3c4ccfe63d4b7fbe5f26d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeeklyForecast(data);
    } catch (error) {
      console.error('Error fetching forecast:', error);
    }
  };

  const setWeatherBackground = (weather) => {
    switch (weather) {
      case 'Thunderstorm':
        setBackground('thunderstorm');
        break;
      case 'Drizzle':
      case 'Rain':
        setBackground('rain');
        break;
      case 'Snow':
        setBackground('snow');
        break;
      case 'Clear':
        setBackground('clear');
        break;
      case 'Clouds':
        setBackground('clouds');
        break;
      default:
        setBackground('default');
    }
  };

  return (
    <div className={`container ${background}`}>
      <SearchBar onSearch={setCity} />
      <div className="base-cities">
        {baseCities.map((baseCity) => (
          <button key={baseCity} onClick={() => setCity(baseCity)}>
            {baseCity}
          </button>
        ))}
      </div>
      {currentWeather && <WeatherCard data={currentWeather} />}
      {weeklyForecast && <WeeklyForecast data={weeklyForecast} />}
    </div>
  );
};

export default App;
