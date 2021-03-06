import React, {useState} from "react";
import axios from "axios";

function Weather() {
  const London = 'London'
  const Key = '1918bf33c5a701dd09efead1a6374b9a'
  const [temp, setTemp] = useState(null)
  const [desc, setDesc] = useState('')
  const [icon, setIcon] = useState('')
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${London}&units=metric&appid=${Key}`)
      .then(data => data.data)
       .then(data => {
         setDesc(data.weather[0].description)
           setIcon(data.weather[0].icon)
         setTemp(data.main.temp)
       })
  return (
    <div className="weather">
      <h1>Weather in London:</h1>
        <div>temperature: {temp}</div>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt=""/>
        <div>description: {desc}</div>
    </div>
  );
}

export default Weather;
