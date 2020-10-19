import React, { useState } from "react";
import { Question } from "../interfaces/gameInterfaces";
import { Jumbotron, Button, Container } from "reactstrap";
import { useDispatch } from "react-redux";
import { moveToNextQuestion } from "../redux/action";

function QuestionsDisplay(props?: any) {
    const question: Question = props.question;
    const [rSelected, setRSelected] = useState<string>();
    let dispatch = useDispatch();

    const buttonClicked = () => {
        props.onClick(rSelected);
        // TO-DO set points accordingly 
        dispatch(moveToNextQuestion());
    };


    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
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
            <p>Selected: {rSelected}</p>
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
