import React from "react";
import { useSelector } from "react-redux";
import { Alert, UncontrolledAlert } from "reactstrap";

function CheckAnswer() {
    const state: any = useSelector((state: any) => state);
    const answer = state.answer;
    const playerAnswer = state.playerAnswer;

    return answer === playerAnswer ? (
        <UncontrolledAlert color="success">Correct Answer</UncontrolledAlert>
    ) : (
        <Alert color="danger">{answer} was the correct answer</Alert>
    );
}

export default CheckAnswer;
