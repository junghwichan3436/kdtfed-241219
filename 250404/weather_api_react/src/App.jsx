import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import { ClipLoader } from "react-spinners";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ img }) => `url(${img})`} center/cover no-repeat;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: #000;
`;

function App() {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [apiError, setApiError] = useState("");
  const [background, setBackground] = useState(null);
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setWeather(false);
    } catch (err) {
      setLoading(err.message);
      //로딩에 대한 여부를 판단짓기 위해
      setLoading(false); //문제가 생긴다면 로딩이 계속 보인다
    }
  };

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  const getWeatherByCity = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setWeather(false);
    } catch (err) {
      setApiError(err.message);
      setLoading(false);
    }

    // console.log(data);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeatherByCurrentLocation(lat, lon);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const getBackground = () => {
    const getImg = `https://api.unsplash.com/GET /photos/random?client_id=${API_UNSPLASH_KEY}`; //먼저 unsplash 주소를 적고 photos/random을 적고 나의 아이디값을 적는다

    fetch(getImg)
      .then((response) => response.json())
      .then(({ urls: { full } }) => setBackground(full));
  };

  useEffect(() => {
    getBackground();
  }, []);

  useEffect(() => {
    if (city === null) {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  return (
    <>
      <GlobalStyles />
      {loading ? (
        <div>
          <ClipLoader color="#f86c6b" loading={loading} />
        </div>
      ) : (
        <Wrapper img={background}>
          <Container img={background}>
            <WeatherBox weather={weather} />
            <WeatherButton
              cities={cities}
              handleCityChange={handleCityChange}
              selectedCity={city}
              setCity={setCity}
            />
          </Container>
        </Wrapper>
      )}
    </>
  );
}

export default App;
