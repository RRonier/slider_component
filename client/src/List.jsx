import React from "react";
import styled from "styled-components";
import { Card, CardBody, Box, Text, Button } from "grommet";
function List(props) {
    const StyledDiv = styled.div`
      .button {
        background-color: #8b0000;
        color: white;
        padding: 10px;
        border-radius: 5px;
      }
      .card_body {
        padding: 20px;
        margin-top: 20px;
      }
      .item_box {
        justify-content: space-between;
      }
      .text {
        margin-top: auto;
        margin-bottom: auto;
      }
    `;
  return (
    <StyledDiv>
      <Card>
        <CardBody className="card_body">
          <Box direction="row" className="item_box">
            <Text className="text">{props.list}</Text>
            <Box className="button_box">
              <Button
                onClick={props.deleteList.bind(this, props.list)}
                className="button"
              >
                Delete
              </Button>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </StyledDiv>
  );
}
export default List;
