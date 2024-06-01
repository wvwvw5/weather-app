import React from 'react';

const WeeklyForecast = ({ data }) => {
  return (
    <div className="weekly-forecast">
      <h2>Прогноз на неделю</h2>
      {data.list.slice(0, 7).map((item, index) => (
        <div key={index} className="forecast-item">
          <div>{new Date(item.dt * 1000).toLocaleDateString()}</div>
          <div>{item.weather[0].description}</div>
          <div>{item.main.temp}°C</div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;
