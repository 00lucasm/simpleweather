import moment from "moment";
import { useEffect, useState } from "react";
import { api } from "./server";

function App() {
  // definição das variáveis de estado com valor inicial
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [data, setData] = useState({})

  // definição de ciclo de vida do componente
  useEffect(() => {

    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      api.get(`/weather/?lat=${lat}&lon=${long}&units=metric&APPID=273555de924e8c91505f2430c2b00c19`).then(res => {
        setData(res.data)
      })
    }

    fetchData()
    
  }, [lat, long])

  return (
    <div className="App">
      <div>
        <h1>City name: { data === undefined ? "Loading..." : data.name}</h1>
        <h2>Temperature: { data.main === undefined ? "Loading..." : data.main.temp} &deg;C</h2>
        <h2>Sunrise: { data.sys === undefined ? "Loading..." : new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US')}</h2>
        <h2>Sunset: { data.sys === undefined ? "Loading..." : new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US')}</h2>
        <h2>Description: { data.weather === undefined ? "Loading..." : data.weather[0].main}</h2>
        <h2>Humidity: { data.main === undefined ? "Loading..." : data.main.humidity} %</h2>
        <h2>Day: {moment().format('dddd')}</h2>
        <h2>Date: {moment().format('DD MMM YYYY')}</h2>
      </div>
    </div>
  );
}

export default App;
