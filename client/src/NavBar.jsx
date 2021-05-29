import React, { useState } from "react";
import { Heading, Form, TextInput, Button } from "grommet";
import styled from "styled-components";
import { Context } from "../context/AppContext";
function Navbar() {
  const [value, setValue] = useState("");
  return (
    <Context.Consumer>
      {(store) => (
        <StyledDiv className="container">
          <Heading className="title">Grommet List App</Heading>
          <Form onSubmit={() => store.addToLists(value)} className="form-group">
            <TextInput
              className="form"
              value={value}
              type="text"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter item"
            />
            <Button type="submit" className="button">
              Add to List
            </Button>
          </Form>
        </StyledDiv>
      )}
    </Context.Consumer>
  );
}
const StyledDiv = styled.div`
  .button {
    margin-top: 10px;
    background-color: purple;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
`;
export default Navbar;
