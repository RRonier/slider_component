import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "grommet";
import { IconButton } from "grommet-controls";
import { Next, Previous } from "grommet-icons";

const Slider = ({ title, stepWidth, ...props }) => {
  const [state, setState] = useState({
    card_container: null,
    currentCard: 0,
    numberOfCards: null,
  });

  useEffect(() => {
    setState({
      ...state,
      numberOfCards: state.card_container.children.length,
    });
  }, []);
  useEffect(() => {
    state.card_container.style.transitionDuration = "0.5s";
    state.card_container.style.transform = `translate(-${
      stepWidth * state.currentCard
    }px)`;
  }, [state.currentCard]);

  let movePrevCard = () => {
    if (state.currentCard > 0) {
      let new_current_card = state.currentCard - 1;
      setState({
        ...state,
        currentCard: new_current_card,
      });
    }
    return;
  };

  let moveNextCard = () => {
    if (state.currentCard < state.card_container.children.length - 1) {
      let new_current_card = state.currentCard + 1;
      setState({
        ...state,
        currentCard: new_current_card,
      });
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
      width="80vw"
    >
      <StyledDiv>
        <div>
          <Title>{title}</Title>
        </div>

        {state.numberOfCards > 5 && (
          <ButtonContainer>
            <IconButton
              icon={<Previous />}
              disabled={state.currentCard === 0}
              onClick={movePrevCard}
            />
            <IconButton
              icon={<Next />}
              disabled={state.currentCard + 5 === state.numberOfCards}
              onClick={moveNextCard}
            />
          </ButtonContainer>
        )}
      </StyledDiv>
      <Div ref={(ref_id) => (state.card_container = ref_id)}>
        {props.children}
      </Div>
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
  margin-left: 15px;
`;
export default Slider;
