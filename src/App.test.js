import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="card">
      <h1 className="title">Погода в вашем городе</h1>
      <div className="weather-info">
        <div className="info-row">
          <span className="info-label">Город:</span>
          <span id="city" className="info-value">{data.name}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Температура:</span>
          <span id="temperature" className="info-value">{data.main.temp}</span>°C
        </div>
        <div className="info-row">
          <span className="info-label">Минимальная температура:</span>
          <span id="min-temperature" className="info-value">{data.main.temp_min}</span>°C
        </div>
        <div className="info-row">
          <span className="info-label">Давление:</span>
          <span id="pressure" className="info-value">{data.main.pressure}</span> гПа
        </div>
        <div className="info-row">
          <span className="info-label">Влажность:</span>
          <span id="humidity" className="info-value">{data.main.humidity}</span>%
        </div>
        <div className="info-row">
          <span className="info-label">Ощущаемая температура:</span>
          <span id="feels-like" className="info-value">{data.main.feels_like}</span>°C
        </div>
        <div className="info-row">
          <span className="info-label">Скорость ветра:</span>
          <span id="wind-speed" className="info-value">{data.wind.speed}</span> м/с
        </div>
        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Погодная икона" className="weather-icon" />
      </div>
    </div>
  );
};

export default WeatherCard;
