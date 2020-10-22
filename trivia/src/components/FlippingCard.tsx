import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useSelector } from "react-redux";
import { Button, Card, CardBody, CardText, CardTitle, Table } from "reactstrap";

function FlippingCard(props: any) {
  const state: any = useSelector((state) => state);
  const [isFlipped, setIsFlipped] = useState(false);

  const incorrectList = state.players[
    props.index
  ].incorrectAnswer.map((question: any) => <li>{question}</li>);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card
        color="dark"
        text="white"
        onClick={() => {
          setIsFlipped(!isFlipped);
        }}
      >
        <CardBody className="text-center">
          <CardTitle>{state.players[props.index].name}</CardTitle>
          <CardText>{state.players[props.index].score}</CardText>
          <Button
            color="danger"
            onClick={() => {
              setIsFlipped(!isFlipped);
            }}
          >
            Click to flip
          </Button>
        </CardBody>
      </Card>

      <Card
        onClick={() => {
          setIsFlipped(!isFlipped);
        }}
      >
        <CardBody className="text-center">
          <CardTitle>
            {" "}
            <h1>Incorrect Questions</h1>
          </CardTitle>

          <CardText>
            <ul>{incorrectList}</ul>
          </CardText>
          <Button
            color="primary"
            onClick={() => {
              setIsFlipped(!isFlipped);
            }}
          >
            Click to flip
          </Button>
        </CardBody>
      </Card>
    </ReactCardFlip>
  );
}

export default FlippingCard;
