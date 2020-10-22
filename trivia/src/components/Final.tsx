import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import { resetState } from "../redux/action";
import FlippingCard from "./FlippingCard";

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
                }}
            >
                <Button color="primary" size="lg" block>
                    Restart Game With Same Players
                </Button>
            </Link>
        </div>
    );
}

export default Final;
