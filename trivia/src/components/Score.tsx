import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { Badge, Card, CardText, CardTitle, Col, Row } from "reactstrap";

function Score() {
    let currentValue: any = useSelector((state) => state);
    let playerOne = currentValue.currentQuestion % 2 == 0 ? "danger" : "";
    let playerTwo = currentValue.currentQuestion % 2 != 0 ? "danger" : "";
    return (
        <div className="App">
            <Card body color={playerOne}>
                <CardTitle>
                    <h3>{currentValue.players[0].name}</h3>
                </CardTitle>
                <CardText>
                    {" "}
                    <h3>
                        <Badge color="secondary">
                            {currentValue.players[0].score}
                        </Badge>
                    </h3>
                </CardText>
            </Card>
            <br />
            <br />
            <Card body color={playerTwo}>
                <CardTitle>
                    <h3>{currentValue.players[1].name}</h3>
                </CardTitle>
                <CardText>
                    <h3>
                        <Badge color="secondary">
                            {currentValue.players[1].score}
                        </Badge>
                    </h3>
                </CardText>
            </Card>
            <br />
            <br />
            <Card body color="warning">
                <CardText>
                    <h1>
                        <Badge color="secondary" center>
                            Level{" "}
                            {(currentValue.currentQuestion % 2
                                ? ((currentValue.currentQuestion - 1) / 2) % 5
                                : (currentValue.currentQuestion / 2) % 5) + 1}
                        </Badge>
                    </h1>
                </CardText>
            </Card>
        </div>
    );
}
export default Score;
