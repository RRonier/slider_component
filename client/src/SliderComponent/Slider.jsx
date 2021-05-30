import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "grommet";
import { IconButton } from "grommet-controls";
import { Next, Previous } from "grommet-icons";

const Slider = ({ title, stepWidth, ...props }) => {
  const [state, setState] = useState({
    currentCard: 0,
    box_position: 0,
    last_card_position: 0,
    numberOfCards: 0,
    card_container: null,
    lastCard: 0,
    box: null,
  });

  useEffect(() => {
    setState({
      ...state,
      numberOfCards: state.card_container.children.length,
      lastCard:
        state.card_container.children[state.card_container.children.length - 1],
      box_position: state.box.getBoundingClientRect().right,
      last_card_position: state.card_container.getBoundingClientRect().right,
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
    console.log(`box-right: ${state.box.getBoundingClientRect().right}`);
    console.log(
      `lastCard-right: ${state.lastCard.getBoundingClientRect().right}`
    );
    console.log(
      `cardContainer-right: ${
        state.card_container.getBoundingClientRect().right
      }`
    );
    state.lastCard.style.border = "dashed red";
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
      ref={(ref_id) => (state.box = ref_id)}
      direction="column"
      border="all"
      background={{ color: "black" }}
      overflow="hidden"
      height="auto"
      width="1125px"
    >
      <StyledDiv>
        <div>
          <Title>{title}</Title>
        </div>

        {state.box_position <= state.last_card_position && (
          <ButtonContainer>
            <IconButton
              icon={<Previous />}
              disabled={state.currentCard === 0}
              onClick={movePrevCard}
            />
            <IconButton
              icon={<Next />}
              disabled={state.box_position >= state.last_card_position}
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
  display: flex;
  width: fit-content;
  border: dashed;
  height: auto;
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
