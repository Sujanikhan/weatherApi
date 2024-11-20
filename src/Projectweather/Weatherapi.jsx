import {useState} from 'react'

const api={
  key:"551459c78e88fb84f631c8ee4e4831e9",
  baseUrl:"https://api.openweathermap.org/data/2.5/weather"
};

const Weatherapi = () => {
  const[search, setSearch]=useState("");
  const[weather, setWeather]=useState({});
  function handleClick(){
    fetch(`${api.baseUrl}?q=${search}&appid=${api.key}`)
    .then((res)=>res.json())
    .then((d)=>setWeather(d))
  }
  return (
    <div>
      <input onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={handleClick}>search</button>
      {weather.main===undefined? (<p>no data available</p>):(
        <div>
          <p>{weather.name}</p>
          <p>{weather.main.temp}</p>
          <p>{weather.weather[0].main}</p>
          <p>{weather.weather[0].description}</p>
          </div>
      )}
    </div>
  )
}

export default Weatherapi