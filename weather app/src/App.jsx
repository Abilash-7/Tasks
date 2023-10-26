import { useState } from 'react';
import i1 from './icons/day/113.png'

function App() {
  const d = new Date();

  const app = document.querySelector('.weather-app');
  const temp = document.querySelector('.temp');
  const dateOutput = document.querySelector('.date');
  const timeOutput = document.querySelector('.time');
  const conditionOutput = document.querySelector('.condition');
  const nameOutput = document.querySelector('.name');
  const icon = document.querySelector('.icon');
  const cloudyOutput = document.querySelector('.cloud');
  const humidityOutput = document.querySelector('.humidity');
  const windOutput = document.querySelector('.wind');
  

  const cities = document.querySelector('.city');

  const [search,setSearch] = useState('')

  let cityInput = "London";

  // cities.forEach((city) => {
  //   city.addEventListener('click',(e) => {
  //     // change city
  //     cityInput= e.target.innerHTML;

  //     // fetchWeatherData();

  //     app.style.opacity='0';
  //   })
  // });
  
  // submit action
  
    const weekdays = [
      'sunday','monday','tuesday','wednesday','thursday','friday','saturday'
    ]
  

  const fetchWeatherData = (e) => {

    fetch(`http://api.weatherapi.com/v1/current.json?key=2120779cd10744ffb2e105452232510&q=${cityInput}&aqi`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      temp.innerHTML = data.current.temp_c+"&#176;";
      conditionOutput.innerHTML = data.current.condition.text;
      
      const date = data.location.localtime;
      const y = parseInt(date.substr(0,4));
      const m = parseInt(date.substr(5,2));
      const d = parseInt(date.substr(8,2));
      const time = date.substr(11);
      const days = new Date(date)
      let day = weekdays[days.getDay()]

      dateOutput.innerHTML = day + `${d}/${m}/${y}`
      timeOutput.innerHTML = time
      nameOutput.innerHTML = data.location.name;

      // const iconId = data.current.condition.icon.substr("//cdn.weatherapi.com/weather/64x64/".length)
      // icon.src = './icons/'+iconId;

      cloudyOutput.innerHTML =data.current.cloud+ '%';
      humidityOutput.innerHTML = data.current.humidity+ '%';
      windOutput.innerHTML = data.current.wind_kph + 'Km/h'

      let timeofDay = 'day';

      // const code = data.current.condition.code;

      // if(!data.current.is_day){
      //   timeofDay = 'night';
      // }

      // if (code == 1000)
      // {
      //   app.style.backgroundImage = `url(./images/${timeofDay}/clear.jpg)`;
      // }
      // else if(
      //   code == 1003 ||
      //   code == 1006 ||
      //   code == 1009 ||
      //   code == 1030 ||
      //   code == 1069 ||
      //   code == 1087 ||
      //   code == 1135 ||
      //   code == 1273 ||
      //   code == 1276 ||
      //   code == 1279 ||
      //   code == 1282
      // ){
      //   app.style.backgroundImage = `url("./images/${timeofDay}/cloud.jpg")`;
      // }
      // else if(
      //   code == 1063 ||
      //   code == 1069 ||
      //   code == 1072 ||
      //   code == 1150 ||
      //   code == 1153 ||
      //   code == 1180 ||
      //   code == 1183 ||
      //   code == 1186 ||
      //   code == 1189 ||
      //   code == 1192 ||
      //   code == 1195 ||
      //   code == 1204 ||
      //   code == 1207 ||
      //   code == 1240 ||
      //   code == 1243 ||
      //   code == 1246 ||
      //   code == 1249 ||
      //   code == 1252
      // ){
        
      //   app.style.backgroundImage = `url("./images/${timeofDay}/rainny.jpg")`;
      // }

      // else
      // {
      //   app.style.backgroundImage = `url("./images/${timeofDay}/cloud-2.jpg")`;
      // }

      // app.style.opacity ='1';
    })
    .catch(err => {
      alert('city not found, please try again')
      // app.style.opacity='1';
    })
    
    e.preventDefault()
  }

  return (
    <>
      <div className="weather-app">
        <div className="box">
                <h3 className="brand">The Weather App</h3>
                <div className='d-flex justify-content-center align-items-center'>
                  <h1 className="temp">--</h1>
                  <div className="city-time">
                    <h1 className="name"></h1>
                    <small>
                      <span className="time">{d.getHours()}:{d.getMinutes()}</span>
                      -
                      <span className="date"> thursday oct 26</span>
                    </small>
                    <div className="weather">
                      <img src={i1} className="icon" width={50} height={50} alt="icon"/>
                      <span className="condition">----------</span>
                    </div>
                  </div>
                </div>

                <div className="panel">
                  <form onSubmit={(e)=> {
                    e.preventDefault()
                    if(search.length == 0)
                    {
                      alert('please type in city name')
                    }
                    else{
                      cityInput = search;
                      fetchWeatherData();
                      setSearch('')
                      app.style.opacity="0";
                    }
                  }}>
                    <input type="text" className='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Location'/>
                    <button type='submit' className='submit'><i class="fas fa-search"></i></button>
                  </form>
                  
                  <ul className='cities'>
                    <li className='city'>Paris</li>
                    <li className='city'>New York</li>
                    <li className='city'>Tokyo</li>
                    <li className='city'>Japan</li>
                  </ul>

                <ul className='details'>
                  <h4>Weather Details</h4>
                  <li>
                    <span>Cloudy</span>
                    <span className='cloud'>--</span>
                  </li>
                  <li>
                    <span>Humidity</span>
                    <span className='humidity'>--</span>
                  </li>
                  <li>
                    <span>Wind</span>
                    <span className='wind'>--</span>
                  </li>
                </ul>

                </div>

            </div>
          </div>
    </>
  )
}

export default App
