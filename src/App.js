
import { useEffect, useState } from 'react';
import './App.css';

import Sun from './both.png'
import verRain from './veryRain.png'

function App() {
  const [inputV, setInputV] = useState(" ");
  const [search, setSearch] = useState("mumbai");
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [imgWe, setImgWe] = useState("Sunny");

  useEffect(() => {
    const fetchApiData = async () => {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputV}&units=metric&appid=1fe55f27829afc97ea60a0f3b1978686`;

      let response = await fetch(url);

      let jsonRes = await response.json();
      console.log(jsonRes);
      setCity(jsonRes.main)
      setWeather(jsonRes.weather);
      console.clear();
    }

    fetchApiData();
  }, [inputV])



  return (
    <>
      <div className="center">
        <div className="card">
          <div className="city-drkMode">



          </div>
          <div className="content-div">
            <div className="search-div">
              <input type="search" name="" className='search-bx' placeholder='Enter City Name' value={inputV} onChange={(event) => {
                setInputV(event.target.value);


              }} />
            </div>
            {
              !city ? (
                <p>No City Found </p>

              ) : (
                <>
                  <div className='bom'>
                    <div className="city-name">
                      <div className="loaction-icon">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>

                      <h1 style={{ textTransform: 'capitalize' }}>{inputV.length <= 0 ? "Enter City Name" : inputV}</h1>


                    </div>
                    <div className="logo_we">
                      <img src={weather[0].main === "Rain" ? verRain : Sun} alt="error" width='100' />

                    </div>
                    {
                      !weather ? (
                        <h1>Sunny</h1>
                      ) : (
                        <h1>{weather[0].main}</h1>
                      )


                    }
                    <h1 className='temp'><span>{city.temp}</span><span className="theme">°C</span></h1>
                    <div className="max-min">
                      <h3 className='smol'>Feel like <span className='theme'> {city.feels_like}°C</span></h3>
                      <h3 className='smol'>Humidity <span className="theme">{city.humidity}<span className='theme'>°C</span></span></h3>


                    </div>
                    <div className="circles"></div>
                    <div className="circles"></div>

                  </div>


                </>
              )
            }
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
