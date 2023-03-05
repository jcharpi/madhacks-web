import Navbar from "./Navbar";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Nutrition from "./pages/Nutrition";
import SelectPage from './pages/SelectPage';
import Login from './components/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import useToken from './components/useToken';
import { Route, Routes, Switch } from "react-router-dom"
import { useEffect, useState } from "react";
import { Dimmer, Loader } from 'semantic-ui-react';

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
            <Route path="/" element={<Home />} />
            <Route path="/exercise" element={<SelectPage />} />
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