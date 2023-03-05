import Navbar from "./components/Navbar";
import Weather from "./pages/WeatherPage";
import Nutrition from "./pages/NutritionPage";
import SelectPage from './pages/SelectPage';
import Login from './pages/LoginPage';
import useToken from './components/useToken';
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react";
import { Dimmer, Loader } from 'semantic-ui-react';
import MapPage from "./pages/MapPage";

function App() {

  const { token, setToken } = useToken();
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const API_KEY = '1abbb4f40d3ebce35e5b8e2f6b7460c5';

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      console.log("Latitude is:", lat)
      console.log("Longitude is:", long)
      
      await fetch('https://api.openweathermap.org/data/2.5/weather/?lat=' + lat + '&lon='+ long + '&units=metric&APPID=' + API_KEY)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    
    <>
    
      <Navbar />
      <div className="container">
        {(typeof data.main != 'undefined') ? (
          <Routes>
            <Route path='/login' exact element={<Login 
                    setToken={setToken}
                    />}
                    />
            <Route path="/" element={<SelectPage />} />
            <Route path="/exercise" element={<MapPage />} />
            <Route path="/weather" element={<Weather weatherData={data}/>} />
            <Route path="/nutrition" element={<Nutrition />} />
          </Routes>
        ): (
          <div>
            <Dimmer active>
              <Loader>Loading..</Loader>
            </Dimmer>
          </div>
        )}
      </div>
    </>
  )
}

export default App