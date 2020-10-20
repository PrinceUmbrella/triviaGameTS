import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import { updateScore } from "../redux/action";

function Score() {
    let currentValue: any = useSelector((state) => state);
    let dispatch = useDispatch();

    return (
        <div className="App">
            <h2>Score</h2>
            <Row>
                <Col sm="6">
                    <Card body color="info">
                        <CardTitle>
                            <h3>{currentValue.players[0].name}</h3>
                        </CardTitle>
                        <CardText>{currentValue.players[0].score}</CardText>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body color="success">
                        <CardTitle>
                            <h3>{currentValue.players[1].name}</h3>
                        </CardTitle>
                        <CardText>{currentValue.players[1].score}</CardText>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
export default Score;
