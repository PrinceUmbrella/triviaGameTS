import React from "react";
import { Col, Row } from "reactstrap";
import FlippingCard from "./FlippingCard";

function Final() {
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
        </div>
    );
}

export default Final;
