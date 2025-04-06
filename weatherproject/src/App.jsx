import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const[data,setData] = useState([]);
  const[location,setLocation] = useState('');
  const[isDataFetched, setDataFetched] = useState(false);
  let steps = 5;
  const url = `http://api.weatherapi.com/v1/current.json?key=f43ef82bc071498f80f220443250204&q=${location}`;
  const urlForLongTerm = `https://api.weatherapi.com/v1/forecast.json?key=f43ef82bc071498f80f220443250204&q=${location}&days=5`;
  const searchLocation = (event) =>{
    if(event.key == 'Enter'){
      axios.get(urlForLongTerm).then((response) =>{
        setData(response.data);
        console.log(response.data);
        setDataFetched(true);
      })
    }
  }

  return (
    <div className='App'>
      
        <div className="searchbar">
              <h1>Weather App</h1>
              <h2></h2>
              <input
              id = "wyszukiwarka"
              value = {location}
              onChange={event => setLocation(event.target.value)} 
              onKeyDown={searchLocation}
              placeholder='Wpisz swoje miasto'
              type="text"/>
              
            </div>

        <div className="container" style = {{visibility: isDataFetched ? 'visible' : 'hidden'}}> 
          <div className="top">
            <br></br>
            <div className="location">
              {data.location ? <h2>Aktualna pogoda {data.current.last_updated}</h2> :null}
              {data.location ? <p>Miasto:{data.location.name}</p> : null}
            </div>
            <div className="temp">
              {data.current ? <p>Temperatura:{data.current.temp_c}</p> : null}
            </div>
            <div className="temp_feels">
              {data.current ? <p>Odczuwalna temperatura:{data.current.feelslike_c}</p> :null}
              
            </div>
          </div>
          <div className="bot">
            <div className="headerbot">
              {data.location ? <h2>Pogoda długoterminowa w {data.location.name}</h2> : null}
            </div>
          <div className="longtermweather">
          {data?.forecast?.forecastday?.map((m) => (
              <h3>{m.date} Średnia temperatura w ciągu dnia: {m.day.avgtemp_c}</h3>
          ))}
              </div>
          </div>
      </div>
    </div>
  )
}

export default App
