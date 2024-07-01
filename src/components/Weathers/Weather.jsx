import {useState,useEffect} from 'react';


const api = {
    key:'e6de4bf459aeb40b5591e3ba49296f4b',
    base:'https://api.openweathermap.org/data/2.5' 
}

const myHeaders = new Headers();
myHeaders.append("accept", "*/*");
myHeaders.append("accept-language", "en-US,en;q=0.9");
myHeaders.append("priority", "u=1, i");
myHeaders.append("x-apihub-key", "jGUBFeqSMpZmG4o-HaHyJeiZiaKGTtPi1G5TJSxgklMomjn1PT");
myHeaders.append("x-apihub-host", "Weather-API.allthingsdev.co");
const requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow"
};




function MyLocation() {
    
    const [Weather  ,setWeather]=useState(null);

    const fetchWeatherDataViaLongLat = async ( lat,long) => {
        try {
            const response = await fetch(`https://Weather-API.proxy-production.allthingsdev.co/weather/getForecast?latitude=${lat}&longitude=${long}&unit=celsius`, requestOptions);
            const data = await response.json();
            setWeather(data.data[0]);
        } catch (error) {
            console.log("Error fetching weather data:", error);
        }
    };





    const [position, setPosition] = useState({ latitude: null, longitude: null,city:null });
    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position);
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            city:''
          });
          fetchWeatherDataViaLongLat(position.coords.latitude,position.coords.longitude);
        });
      } else {
        console.log("Geolocation is not available in your browser.");
      }
    }, []);
  
    return (
      <div>
        <h2>My Current Location</h2>

        <WeatherData data={Weather}/>

        {position.latitude && position.longitude ? (
          <p>
            Latitude: {position.latitude}, Longitude: {position.longitude}
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }




  export default function Weather() {
      const [search, setSearch] = useState('');
      const [weather, setWeather] = useState(null);
  
      const myHeaders = new Headers();
      myHeaders.append("accept", "*/*");
      myHeaders.append("accept-language", "en-US,en;q=0.9");
      myHeaders.append("priority", "u=1, i");
      myHeaders.append("x-apihub-key", "jGUBFeqSMpZmG4o-HaHyJeiZiaKGTtPi1G5TJSxgklMomjn1PT");
      myHeaders.append("x-apihub-host", "Weather-API.allthingsdev.co");
  
      const requestOptions = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow"
      };
  
      const fetchWeatherData = async () => {
          try {
              const response = await fetch(`https://Weather-API.proxy-production.allthingsdev.co/weather/citySearch?search_term=${search}`, requestOptions);
              const data = await response.json();
              console.log("Weather data fetched:", data);
              setWeather(data.data[0]);
          } catch (error) {
              console.log("Error fetching weather data:", error);
          }
      };
  
      const searchPressed = () => {
          if (search === '') return;
          fetchWeatherData();
      };
  
      return (
          <div className='App'>
              <h1>Weather App</h1>
              <input type='text' onChange={(e) => setSearch(e.target.value)} />
              <button onClick={searchPressed}>Search</button>
              <WeatherData data={weather} />
              <br />
              <MyLocation/>
          </div>
      );
  }
  
  function WeatherData({ data }) {
      if (!data) {
          return <p>No Data Found, Please Re-try!</p>;
      }
      return (
          <div>
              <h2>City: {data.city}</h2>
              <p>Geo Code: {data.geocode}</p>
              <p>State Or Country: {data.stateOrCountry}</p>
          </div>
      );
  }
  