import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import { updateScore } from "../redux/action";

function Score() {
    let currentValue: any = useSelector((state) => state);
    let dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Score</h1>
            <Row>
                <Col sm="6">
                    <Card body color="info">
                        <CardTitle>{currentValue.players[0].score}</CardTitle>
                        <CardText>{currentValue.players[0].name}</CardText>
                        <Button onClick={() => dispatch(updateScore(0, 1))}>
                            Go somewhere
                        </Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body color="success">
                        <CardTitle>{currentValue.players[1].score}</CardTitle>
                        <CardText>{currentValue.players[1].name}</CardText>
                        <Button onClick={() => dispatch(updateScore(1, 1))}>
                            Go somewhere
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
export default Score;
