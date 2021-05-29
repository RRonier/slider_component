import React from "react";
import Slider from "./SliderComponent/Slider";
import styled from "styled-components";
import Card from "./SliderComponent/Card";
// import Carrousel from "./Carrousel/HorizontalCarrousel";

function App() {
  
  return (
    <Container>
      <Slider title="Recently viewed" previous="FormPrevious" next="FormNext">
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
  margin: 50px;
`;

export default App;
