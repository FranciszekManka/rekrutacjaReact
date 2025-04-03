import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const[data,setData] = useState('');
  const[location,setLocation] = useState('');


  const url = `http://api.weatherapi.com/v1/current.json?key=f43ef82bc071498f80f220443250204&q=${location}`;

  const searchLocation = (event) =>{
    if(event.key == 'Enter'){
      axios.get(url).then((response) =>{
        setData(response.data);
        console.log(response.data);
      })
    }
  }


  return (
    <div className='App'>
      <div className="container">
          <div className="top">
            <div className="searchbar">
              <h1>Weather App</h1>
              <input
              value = {location}
              onChange={event => setLocation(event.target.value)} 
              onKeyDown={searchLocation}
              placeholder='Wpisz swoje miasto'
              type="text"/>

            </div>
            <div className="location">
              {data.location ? <p>Miasto:{data.location.name}</p> : null}
            </div>
            <div className="temp">
              {data.current ? <p>Temperatura:{data.current.temp_c}</p> : null}
            </div>
            <div className="opis">
              {data.current ? <p>Odczuwalna temperatura:{data.current.feelslike_c}</p> :null}
            </div>
          </div>
          <div className="bot">
              <div className="odczuwalnatemp">
              </div>
              <div className="wilgotosc">
                {data.current ? <p>Wilgotność:{data.current.humidity}</p> : null}
              </div>
          </div>
      </div>
    </div>
  )
}

export default App
