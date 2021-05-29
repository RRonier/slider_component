import React from "react";
import styled from "styled-components";

export default function GrommetCard() {
  const primaryGradient =
    "linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%))";

  const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: max-content;
    margin: 20px;
    @media all and (max-width: 1240px) {
      flex-direction: column;
    }
  `;
  const Card = styled.div`
    min-width: 380px;
    box-shadow: 3px -2px 19px 0px rgba(50, 50, 50, 0.51);
    border-radius: ${(props) =>
      props.left ? " 6px 0 0 6px" : props.right ? "0 6px 6px 0" : "6px"};
    background: ${(props) =>
      props.secondary === undefined ? "#fff" : primaryGradient};
    padding: 25px 20px;
    height: ${(props) => (props.center ? "520px" : "480px")};
    display: flex;
    justify-content: center;
    align-items: center;
    @media all and (max-width: 1240px) {
      margin-bottom: 20px;
      border-radius: 6px;
      height: 480px;
    }
    @media all and (max-width: 420px) {
      min-width: 90%;
    }
  `;
  const CardButton = styled.div`
    padding: 10px 15px;
    min-height: 50px;
    box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2), 0px 0px 2px rgba(0, 0, 0, 0.2);
    color: ${(props) => (props.secondary !== undefined ? "#fff" : "#7c7ee3")};
    background: ${(props) =>
      props.secondary === undefined ? "#fff" : primaryGradient};
    text-align: center;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    border-radius: 6px;
  `;
  const CardContent = styled.div`
    width: 100%;
    color: ${(props) => (props.secondary !== undefined ? "#fff" : "#000")};
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1.3px solid #eee;
    text-align: center;
  `;
  const Div = styled.div`
    min-width: 100%;
  `;
  return (
    <>
      <CardWrapper>
        <Card left>
          <Div>
            <Div>
              <CardContent>
                <small>Basic</small>
                <h1>$588</h1>
              </CardContent>
              <CardContent>
                <p>500 GB storage</p>
              </CardContent>
              <CardContent>
                <p>2 Users Allowed</p>
              </CardContent>
              <CardContent>
                <p>Send Up To 3 GB</p>
              </CardContent>
            </Div>
            <CardButton secondary>LEARN MORE</CardButton>
          </Div>
        </Card>

        <Card center secondary>
          <Div>
            <Div>
              <CardContent secondary>
                <small>Premium</small>
                <h1>$788</h1>
              </CardContent>
              <CardContent secondary>
                <p>75 GB storage</p>
              </CardContent>
              <CardContent secondary>
                <p>4 Users Allowed</p>
              </CardContent>
              <CardContent secondary>
                <p>Send Up To 5 GB</p>
              </CardContent>
            </Div>
            <CardButton>LEARN MORE</CardButton>
          </Div>
        </Card>

        <Card right>
          <Div>
            <Div>
              <CardContent>
                <small>PRO</small>
                <h1>$1000</h1>
              </CardContent>
              <CardContent>
                <p>1TB storage</p>
              </CardContent>
              <CardContent>
                <p>Unlimited Users Allowed</p>
              </CardContent>
              <CardContent>
                <p>Send Up To 10 GB</p>
              </CardContent>
            </Div>
            <CardButton secondary>LEARN MORE</CardButton>
          </Div>
        </Card>
      </CardWrapper>
    </>
  );
}
