import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "grommet";
import { IconButton } from "grommet-controls";
import { FormNext, FormPrevious } from "grommet-icons";


const Slider = ({title, ...props}) => {
  // const [currentCard, setCurrentCard] = useState(null);
  let card_container;
  useEffect(() => {
    console.log(card_container.children.length);
  });

  return (
    <Box
      direction="column"
      border="all"
      justify="center"
      background={{ color: "black" }}
    >
      <StyledDiv>
        <div>
          <Title>{title}</Title>
        </div>
        <ButtonContainer>
          <IconButton icon={<FormPrevious />} />
          <IconButton icon={<FormNext />} />
        </ButtonContainer>
      </StyledDiv>
      <Div ref={(ref_id) => (card_container = ref_id)}>{props.children}</Div>
    </Box>
  );
};

const Div = styled.div`
  min-width: 100%;
  display: flex;
  overflow: hidden;
`;
const StyledDiv = styled.div`
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
const Title = styled.h1`
  margin-left: 24px;
`;
export default Slider;
