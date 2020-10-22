import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import { getQuestions, resetState } from "../redux/action";
import FlippingCard from "./FlippingCard";
import listOfQuestions from "./SetOfQuestions";

function Final() {
    const dispatch = useDispatch();
    return (
        <div>
            <Row>
                <Col>
                    <FlippingCard index={0}></FlippingCard>
                </Col>
                <Col>
                    <FlippingCard index={1}></FlippingCard>
                </Col>
            </Row>
            <br />
            <br />
            <Link
                to="/home"
                onClick={() => {
                    dispatch(resetState());
                    dispatch(getQuestions(listOfQuestions()));
                }}
            >
                <Button color="primary" size="lg" block>
                    Restart Game
                </Button>
            </Link>
        </div>
    );
}

export default Final;
