import React from "react";
import { useSelector } from "react-redux";
import { Progress } from "reactstrap";

function PlayerProgress() {
    let currentValue: any = useSelector((state) => state);
    let currentPlayer = currentValue.currentQuestion % 2;
    let answered = currentValue.players[currentPlayer].correctAnswer;

    return (
        <Progress value={answered * 20} color="danger">
            {answered * 20}%
        </Progress>
    );
}

export default PlayerProgress;
