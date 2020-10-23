import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useSelector } from "react-redux";
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardText,
    CardTitle,
    ListGroup,
    ListGroupItem,
} from "reactstrap";

function FlippingCard(props: any) {
    const state: any = useSelector((state) => state);
    const [isFlipped, setIsFlipped] = useState(false);
    let isCurrentPlayerWinner =
        state.players[props.index].score >
        state.players[(props.index + 1) % 2].score;

    const incorrectList = state.players[
        props.index
    ].incorrectAnswer.map((question: any) => (
        <ListGroupItem color="warning">{question}</ListGroupItem>
    ));

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card
                color={isCurrentPlayerWinner ? "success" : "warning"}
                text="white"
                onClick={() => {
                    setIsFlipped(!isFlipped);
                }}
            >
                <CardBody className="text-center">
                    <CardTitle>
                        <h2>
                            {isCurrentPlayerWinner
                                ? "Congratulations You Won"
                                : ""}
                        </h2>
                        <h2>{state.players[props.index].name} </h2>
                    </CardTitle>
                    <CardText>
                        <Badge color="secondary">
                            {state.players[props.index].score}{" "}
                            {state.players[props.index].score == 1
                                ? "Point"
                                : "Points"}
                        </Badge>
                    </CardText>
                    <Button
                        color="danger"
                        onClick={() => {
                            setIsFlipped(!isFlipped);
                        }}
                    >
                        See Incorrect Questions
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
                        <ListGroup>{incorrectList}</ListGroup>
                    </CardText>
                    <Button
                        color="primary"
                        onClick={() => {
                            setIsFlipped(!isFlipped);
                        }}
                    >
                        Go Back To Score
                    </Button>
                </CardBody>
            </Card>
        </ReactCardFlip>
    );
}

export default FlippingCard;
