import React from "react";
import Slider from "./SliderComponent/Slider";
import styled from "styled-components";
import { Box } from "grommet";
import { IconButton } from "grommet-controls";
import { FormPrevious } from "grommet-icons";
import { FormNext } from "grommet-icons";
// import Carrousel from "./Carrousel/HorizontalCarrousel";

function App() {
  
  return (
    <Container>
      <Box
        direction="column"
        border="all"
        justify="center"
        background={{ color: "black" }}
      >
        <Div>
          <div>
            <h1>Recently viewed</h1>
          </div>
          <ButtonContainer>
            <IconButton icon={<FormPrevious />} />
            <IconButton icon={<FormNext />} />
          </ButtonContainer>
        </Div>
        <Slider />
      </Box>
    </Container>
    //---- Carrousel testing
    // <Carrousel />
  );
}

const Container = styled.div`
  margin: 50px;
  overflow: hidden;
`;
const Div = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  margin: 10px;
  @media all and (min-width: 360px) {
    display: flex;
  }
`;

export default App;
