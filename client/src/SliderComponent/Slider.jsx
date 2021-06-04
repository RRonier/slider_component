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
    difference: 0,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      box_position: box.current.getBoundingClientRect().right,
      last_card_position: card_container.current.getBoundingClientRect().right,
      difference:
        card_container.current.getBoundingClientRect().right -
        box.current.getBoundingClientRect().width,
      distance:
        card_container.current.getBoundingClientRect().right -
        box.current.getBoundingClientRect().right,
      wider:
        card_container.current.getBoundingClientRect().right >
        box.current.getBoundingClientRect().right
          ? true
          : false,
    }));
  }, []);

  //Add values to the state at first render
  useEffect(() => {
    card_container.current.style.transitionDuration = "0.5s";
    card_container.current.style.transform = `translate(-${
      stepWidth * state.move
    }px)`;
    console.clear();
    console.log(
      card_container.current.getBoundingClientRect().right -
        stepWidth -
        box.current.getBoundingClientRect().right <
        0 &&
        card_container.current.getBoundingClientRect().right -
          box.current.getBoundingClientRect().right >
          0
    );
    console.log("-------testing------------");
    console.log(
      `${
        card_container.current.getBoundingClientRect().right -
          stepWidth -
          box.current.getBoundingClientRect().right <
        0
      }`
    );

    console.log(
      `${
        card_container.current.getBoundingClientRect().right <
        box.current.getBoundingClientRect().right
      }`
    );
  }, [state.move, card_container.current]);

  //Move the cards to the right
  let movePrevCard = () => {
    //increase move counter
    if (state.move > 0) {
      setState((prevState) => ({
        ...prevState,
        move: prevState.move - 1,
      }));
    }
  };

  //Move the cards to the left
  let moveNextCard = () => {
    setState((prevState) => ({
      ...prevState,
      move: prevState.move + 1,
    }));
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
              disabled={
                card_container.current.getBoundingClientRect().right -
                  stepWidth -
                  box.current.getBoundingClientRect().right <
                  0 &&
                card_container.current.getBoundingClientRect().right <
                  box.current.getBoundingClientRect().right
              }
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
  // border: dashed green;
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
