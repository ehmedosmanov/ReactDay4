import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCloud, faTint, faSun, faSnowflake, faBolt } from '@fortawesome/free-solid-svg-icons';
import { data } from '../modules/module';
import axios from 'axios';

const Weather = async () => {
  const [weatherData, setWeatherData] = useState(null)
  useEffect(() => {
    const publicKey = 'bb4d045b8c461c12eb4e7de44c8f5cce';
    const privateKey = '491bf9f0af2216542b78425c55a295583233c0a4';
    const timestamp = new Date().getTime();
    const hash = md5(`${timestamp}${privateKey}${publicKey}`);

    const fetchData = async () => {
      try {
        const res = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`);
        console.log(res.data);
        setWeatherData(res.data)
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => {
      console.log('Gonderildi');
    }
  }, [])
  
  return (
    <div>
       {weatherData && (
        <div>
          <p>Temperature: {weatherData.main.temp}</p>
        </div>
      )}
    </div>
  )
}

export default Weather