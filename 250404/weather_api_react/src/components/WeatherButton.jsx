import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  & > button {
    font-size: 2rem;
  }
`;

const WeatherButton = ({ cities }) => {
  return (
    <ButtonGroup>
      <Button variant="warning">Current Location</Button>
      {cities.map((it) => (
        <Button key={it} variant="warning">
          {it}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherButton;
