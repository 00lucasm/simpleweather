import { useEffect, useState } from "react";

function App() {
  // definição das variáveis de estado com valor inicial
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)

  // definição de ciclo de vida do componente
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)

  }, [lat, long])

  return (
    <div className="App">
    <h1>
      lat: {lat}
      <br/>
      long: {long}
    </h1>
    </div>
  );
}

export default App;
