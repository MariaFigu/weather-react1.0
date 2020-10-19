import React, {useState} from 'react';
import axios from 'axios';

import Loader from 'react-loader-spinner'

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const [temp, setTemp] = useState({})

function showTemp(response) {
    setResult (true)
    setTemp({
        name: response.data.name,
        temperature: response.data.main.temp ,
        wind: response.data.wind.speed ,
        feelslike: response.data.main.feels_like ,
        
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        description: response.data.weather[0].description ,
    });
  }

  

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c1523e5633a5a3610a4671a851484050&units=metric`;
  axios.get(url).then(showTemp);
  
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit} class="form-inline" id="search-bar">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search City"
                  aria-label="Search"
                  id="search-city"
                  onChange={updateCity}
                />
                <button
                  class="btn btn-outline-primary my-2 my-sm-0"
                  type="submit"
                  id="magnifier"
                >
                  🔎
                </button>
                
              </form>
  );

  if (result === true) {
    return (
      <div>
        {form}
        <div className="card-text p-3">
              <h2>{temp.name}</h2>
                            
            </div>
         <div className="card-temperature pl-3">
              <img alt="clear"src={temp.icon} id="icon" />
              <span className="temp">{Math.round(temp.temperature)}</span>
              <span className="units"></span>

              <a href="#" id="celsius">°C</a> |
              <a href="#" id="fahreneit"> °F</a>
            </div>
            <div className="card-feel pl-3">
             <div >{temp.description}</div>
            </div>
            <div className="card-wind p-3">
              <div className="real-feel" >Real Feel: {Math.round(temp.feelslike)}°C</div>
              
              <div className="wind-speed">Wind: {temp.wind} Km/h</div>
            </div>
      </div>

    );
  } else {
    return (
      <div>
        {form}
        
    
      <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={300000}  
      />
      </div>
      );
  }
}
