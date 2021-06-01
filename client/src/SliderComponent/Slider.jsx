import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Box } from "grommet";
import { IconButton } from "grommet-controls";
import { Next, Previous } from "grommet-icons";

const Slider = ({ title, stepWidth, ...props }) => {
  let card_container = useRef();
  let box = useRef();
  const [state, setState] = useState({
    move: 0,
    box_position: 0,
    distance: 0,
    last_card_position: 0,
    stepWidth: stepWidth,
    wider: false,
  });

  //Add values to the state at first render
  useEffect(() => {
    console.clear();
    setState({
      ...state,
      box_position: box.current.getBoundingClientRect().right,
      last_card_position: card_container.current.getBoundingClientRect().right,
      distance:
        card_container.current.getBoundingClientRect().right -
        box.current.getBoundingClientRect().right,
      wider:
        card_container.current.getBoundingClientRect().right >
        box.current.getBoundingClientRect().right ? true : false
    });
  }, []);

  useEffect(() => {
    //move the cards after the button is clicked
    card_container.current.style.transitionDuration = "0.5s";
    card_container.current.style.transform = `translate(-${
      stepWidth * state.move
    }px)`;
    
  }, [state.move, state.distance, state.last_card_position]);

  //Move the cards to the right
  let movePrevCard = () => {
    setState((myState) => ({
      ...myState,
      last_card_position: card_container.current.getBoundingClientRect().right,
    }));

    //increase move counter
    if (state.move > 0) {
      let new_current_card = state.move - 1;
      setState((prevState) => ({
        ...prevState,
        move: new_current_card,
      }));
    }
    return;
  };

  //Move the cards to the left
  let moveNextCard = () => {
    console.clear();
    console.log(`distance: ${state.distance}`);
    console.log(
      `distance: ${
        card_container.current.getBoundingClientRect().right -
        box.current.getBoundingClientRect().right
      }`
    );
    setState((prevState) => ({
      ...prevState,
      box_position: box.current.getBoundingClientRect().right,
      last_card_position: card_container.current.getBoundingClientRect().right,
    }));

    if (state.distance <= 0) {
      card_container.current.style.transform = `translate(${
        box.current.getBoundingClientRect().right
      }px)`;
    }

    // if (state.move < card_container.current.children.length - 1) {
    if (state.last_card_position > state.box_position) {
      let new_current_card = state.move + 1;
      setState((prevState) => ({
        ...prevState,
        move: new_current_card,
      }));
    }
    return;
  };

  return (
    <Box
      ref={box}
      direction="column"
      background={{ color: "black" }}
      overflow="hidden"
      height="auto"
      width="1125px"
    >
      <StyledDiv>
        <div>
          <Title>{title}</Title>
        </div>

        {state.wider && (
          <ButtonContainer>
            <IconButton
              icon={<Previous />}
              disabled={state.move === 0}
              onClick={movePrevCard}
            />
            <IconButton
              icon={<Next />}
              disabled={state.distance === 0 || state.distance <= 0}
              onClick={moveNextCard}
            />
          </ButtonContainer>
        )}
      </StyledDiv>
      <Div ref={card_container}>{props.children}</Div>
    </Box>
  );
};

const Div = styled.div`
  display: flex;
  width: fit-content;
  border: dashed green;
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
