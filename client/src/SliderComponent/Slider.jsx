import React, { useEffect, useState } from "react";
import Card from "./Card";
import styled from "styled-components";

const Slider = () => {
  // const [currentCard, setCurrentCard] = useState(null);
  let card_container;
  useEffect(() => {
    console.log(card_container.children.length);
  });

  return (
    <Div ref={(ref_id) => (card_container = ref_id)}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Div>
  );
};

const Div = styled.div`
  min-width: 100%;
  display: flex;
`;

export default Slider;
