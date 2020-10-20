import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "reactstrap";

function CheckAnswer() {
    const state: any = useSelector((state: any) => state);
    const answer = state.answer;
    const playerAnswer = state.playerAnswer;

    return answer === playerAnswer ? (
        <Alert color="success">Correct Answer</Alert>
    ) : (
        <Alert color="danger">{answer} is the correct answer</Alert>
    );
}

export default CheckAnswer;
