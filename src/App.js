import React from 'react';
import Weather from "./Weather";
import Date from "./Date";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

export default function App() {
  return (
    
      <div className="container">
      <div className="card main-card" >
        <div className="row no-gutters">
          <div className="col-8">
            <nav className="navbar navbar-light">
      <Weather  />
      
<div className="date">
  < Date />
</div>
  </nav>
  </div>
<div className="col-4">
            <div className="card-body text-center">
              <div className="card-day border rounded-pill">
                <strong> Sat </strong> <br />🌞 <br />
                <small>27°C/23°C</small>
              </div>
              <div className="card-day border rounded-pill">
                <strong>Sun</strong> <br />🌞 <br />
                <small>27°C/23°C</small>
              </div>
              <div className="card-day border rounded-pill">
                <strong>Mon</strong> <br />🌞 <br />
                <small>27°C/23°C</small>
              </div>
              <div className="card-day border rounded-pill">
                <strong>Tue</strong> <br />🌞 <br />
                <small>27°C/23°C</small>
              </div>
              <div className="card-day border rounded-pill">
                <strong>Wed</strong> <br />🌞 <br />
                <small>27°C/23°C</small>
              </div>
            </div>
          </div>
    </div></div>
    <div class="open-code pl-3">
        <small
          ><a href="https://github.com/MariaFigu/weather-react1.0"
            >Open-source code</a
          >
          and hosted on
          <a href="https://app.netlify.com/sites/stoic-morse-455fe4/overview"
            >Netlify</a
          >, by Maria Figueiredo</small
        >
      </div></div>
    
  );
  
}