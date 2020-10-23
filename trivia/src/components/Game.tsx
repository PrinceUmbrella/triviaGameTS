import React from "react";
import Score from "./Score";

import { Col, Container, Jumbotron, Row } from "reactstrap";
import { useSelector } from "react-redux";
import CheckAnswer from "./CheckAnswer";
import Final from "./Final";
import PlayerProgress from "./PlayerProgress";
import QuestionsDisplay from "./Questions";
import { Redirect } from "react-router-dom";

function Game() {
    const state: any = useSelector((state) => state);
    let currentQuestion = state.currentQuestion;

    return (
        <Container>
            {state.currentQuestion === 10 ? (
                <Jumbotron>
                    <Container>
                        <Final />
                    </Container>
                </Jumbotron>
            ) : (
                <div>
                    <PlayerProgress />

                    <Row>
                        <Col sm="12" md="12" lg="8">
                            <br />
                            {state.answer !== "" &&
                            state.currentAnswer !== "" ? (
                                <CheckAnswer />
                            ) : (
                                <div></div>
                            )}
                            {state.questionList !== [] ? (
                                <QuestionsDisplay
                                    question={
                                        state.questionList[currentQuestion]
                                    }
                                />
                            ) : (
                                <Redirect to="/" />
                            )}
                        </Col>

                        <Col sm="12" md="12" lg="4">
                            <br />
                            <Score />
                        </Col>
                    </Row>
                </div>
            )}
        </Container>
    );
}

export default Game;
