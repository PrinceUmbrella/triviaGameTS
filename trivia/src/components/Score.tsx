import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardText, CardTitle, Col, Row } from 'reactstrap';
import {updateScore} from '../redux/action';

function Score() {
    let currentValue: any = useSelector(state => state);
    console.log(currentValue);
    let dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Score</h1>
            <Row>
            <Col sm="6">
                <Card body>
                <CardTitle>{currentValue.players[0].score}</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button onClick={() => dispatch(updateScore(0, 1))}>Go somewhere</Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                <CardTitle>{currentValue.players[1].score}</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button onClick={() => dispatch(updateScore(1, 2))}>Go somewhere</Button>
                </Card>
            </Col>
            </Row>
        </div>
    );
}
export default Score;
