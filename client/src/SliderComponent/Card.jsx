import React from "react";
import styled from "styled-components";
import Imagen from "./Imagen";

const Card = () => {
  
  return (
    <StyledCard>
      <Div>
        <CardContent>
          <Imagen />
        </CardContent>
        <div>Ronier Ramos</div>
        <div>Sofware Developer</div>
        <div>From $999</div>
      </Div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  min-width: 200px;
  border-radius: ${(props) =>
    props.left ? " 6px 0 0 6px" : props.right ? "0 6px 6px 0" : "6px"};
  background: ${(props) => (props.secondary === undefined ? "none" : "white")};
  padding: 0 10px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px 1px 3px 1px;
  @media all and (max-width: 1240px) {
    margin-bottom: 20px;
    border-radius: 6px;
    height: 480px;
  }
  @media all and (max-width: 420px) {
    min-width: 90%;
  }
`;

const CardContent = styled.div`
  width: 100%;
  color: ${(props) => (props.secondary !== undefined ? "#fff" : "#000")};
  padding-bottom: 10px;
  margin-top: 0;
  margin-bottom: 10px;
  text-align: center;
`;
const Div = styled.div`
  min-width: 100%;
  color: white;
`;

export default Card;
