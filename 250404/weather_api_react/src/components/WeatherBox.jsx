import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 200px;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 20px;
  border-radius: 16px;
  box-shadow: 4px 8px 8px raba(0, 0, 0, 0.6);
`;

const City = styled.h1`
  font-size: 2.2rem;
`;

const Weather = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;

const Desc = styled.h3`
  font-size: 2.5rem;
`;

const WeatherBox = ({ weather }) => {
  let cityName = "";
  switch (weather?.name) {
    case "Jamwon-dong":
      cityName = "서울시 서초구";
      break;
    case "Paris":
      cityName = "프랑스 파리";
      break;
    case "New York":
      cityName = "미국 뉴욕";
      break;
    case "Tokyo":
      cityName = "일본 도쿄";
      break;
    case "Osan":
      cityName = "경기도 오산";
      break;
  }

  let weatherMain = "";
  switch (weather?.weather[0].main) {
    case "Clouds":
      weatherMain = "오늘 날씨구름";
      break;
  }

  return (
    <Container>
      <City>도시 : {weather?.name}</City>
      <Weather>
        온도 : {weather?.main.temp}도 | 습도 : {weather?.main.humidity}%
      </Weather>
      <Desc>현재날씨, :{weather?.weather[0].main}</Desc>
    </Container>
  );
};

export default WeatherBox;
