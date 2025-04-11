import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

function App() {
  const getWeatherByCurrentLocation = (lat, lon) => {
    const url = ``;
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.lonitude;
    });
    console.log("Now!");
  };
  return (
    <>
      <GlobalStyles />
      <h1>Hello World</h1>
    </>
  );
}

export default App;
