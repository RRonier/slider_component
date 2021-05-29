import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "grommet";
import { IconButton } from "grommet-controls";
import { Next, Previous } from "grommet-icons";

const Slider = ({ title, stepWidth, ...props }) => {
  const [currentCard, setCurrentCard] = useState(0);
  let card_container;
  let lastCard;

  useEffect(() => {
    console.log(currentCard);
    console.log(lastCard);
    card_container.style.transitionDuration = "0.5s";
    card_container.style.transform = `translate(-${stepWidth * currentCard}px)`;
  }, [currentCard]);

  let moveNextCard = () => {
    if (currentCard > 0) {
      let new_current_card = currentCard - 1;
      setCurrentCard(new_current_card);
    }
    return;
  };

  let movePrevCard = () => {
    if (currentCard < card_container.children.length - 1) {
      let new_current_card = currentCard + 1;
      setCurrentCard(new_current_card);
    }
    return;
  };

  return (
    <Box
      direction="column"
      border="all"
      justify="center"
      background={{ color: "black" }}
      overflow="hidden"
    >
      <StyledDiv>
        <div>
          <Title>{title}</Title>
        </div>
        <ButtonContainer>
          <IconButton
            icon={<Previous />}
            // disabled={}
            onClick={movePrevCard}
          />
          <IconButton
            icon={<Next />}
            disabled={currentCard === 0}
            onClick={moveNextCard}
          />
        </ButtonContainer>
      </StyledDiv>
      <Div ref={(ref_id) => (card_container = ref_id)}>{props.children}</Div>
    </Box>
  );
};

const Div = styled.div`
  min-width: 100%;
  display: flex;
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
