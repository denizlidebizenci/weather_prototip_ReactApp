//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
import {useState ,useEffect} from 'react'
import axios  from "axios";
import { usePosition } from 'use-position';
import HavaDurumu from './components/HavaDurumu';
import * as React from 'react';
import Button from '@mui/material/Button';
import  "./index.css";

const App = () => {
    const [weather, setWeather] = useState()
    const {latitude, longitude } = usePosition()
     const lang = 'tr'
   const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY 
   try{
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`)
    setWeather(data)
   }catch{
    alert('hata')
   }
}
useEffect(()=>{
    latitude && longitude && getWeatherData(latitude, longitude)
}, [latitude, longitude])
  
console.log(latitude, longitude, weather);


  return (
    <div className='back'>
      <HavaDurumu weather = {weather}/>
      
    </div>
  )
}

export default App