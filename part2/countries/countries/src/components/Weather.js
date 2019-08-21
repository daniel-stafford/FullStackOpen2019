import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = props => {
  const [weather, setWeather] = useState({
    current: {
      temp_c: 'loading...',
      wind_kph: 'loading...',
      wind_dir: 'loading...',
      condition: {
        icon: 'loading...'
      }
    }
  });

  const key = '8d2c6baec18449d5914164017192108';
  useEffect(() => {
    axios
      .get(
        `http://api.apixu.com/v1/current.json?key=${key}&q=${
          props.country.capital
        }`
      )
      .then(response => {
        setWeather(response.data);
      });
  }, []);
  return (
    <div>
      <h3>Weather</h3>
      <p>Temperature: {weather.current.temp_c} degrees</p>
      <img src={weather.current.condition.icon} alt='weather icon' />
      <p>
        Wind: {weather.current.wind_kph} kph direction{' '}
        {weather.current.wind_dir}
      </p>
    </div>
  );
};

export default Weather;
