import React, { useState } from "react";
import { Question } from "../interfaces/gameInterfaces";
import { Jumbotron, Button, Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    correctAnswer,
    incorrectAnswer,
    moveToNextQuestion,
    setAnswer,
    setPlayerAnswer,
    updateScore,
} from "../redux/action";
import { Redirect } from "react-router-dom";

function QuestionsDisplay(props?: any) {
    const question: Question = props.question;
    const [rSelected, setRSelected] = useState<string>();
    let dispatch = useDispatch();
    const currentQuestionNum: any = useSelector((state) => state);

    async function buttonClicked() {
        dispatch(setPlayerAnswer(rSelected));
        dispatch(setAnswer(question.answer));

        if (rSelected === question.answer) {
            dispatch(
                updateScore(
                    currentQuestionNum.currentQuestion % 2,
                    question.worth
                )
            );
            dispatch(correctAnswer(currentQuestionNum.currentQuestion % 2));
        } else {
            dispatch(
                incorrectAnswer(
                    currentQuestionNum.currentQuestion % 2,
                    question.question
                )
            );
        }
        setRSelected(undefined);
        dispatch(moveToNextQuestion());
    }

    return (
        <div>
            {question ? (
                <div>
                    <Jumbotron fluid>
                        <Container fluid align={"center"}>
                            <p>{question.question}</p>
                        </Container>
                    </Jumbotron>
                    {question.options.map((option, key: any) => {
                        return (
                            <Button
                                id={key}
                                color="secondary"
                                size="lg"
                                onClick={() => setRSelected(option)}
                                active={rSelected === option}
                                block
                            >
                                {option}
                            </Button>
                        );
                    })}
                </div>
            ) : (
                <Redirect to="/input" />
            )}

            {rSelected ? (
                <Button
                    color="primary"
                    size="lg"
                    onClick={() => buttonClicked()}
                    block
                >
                    Submit Answer{" "}
                </Button>
            ) : (
                <Button color="primary" size="lg" disabled block>
                    Choose Answer{" "}
                </Button>
            )}
        </div>
    );
}

export default QuestionsDisplay;
