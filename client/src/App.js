import React from "react";
import Slider from "./SliderComponent/Slider";
import styled from "styled-components";
import Card from "./SliderComponent/Card";
// import Carrousel from "./Carrousel/HorizontalCarrousel";

function App() {
  return (
    <Container>
      <Slider title="Recently viewed" stepWidth="500">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />  
      </Slider>
    </Container>
    //---- Carrousel testing
    // <Carrousel />
  );
}

const Container = styled.div`
  margin: 0 50px 0 50px;
`;

export default App;
