import React from "react";
import { useSelector } from "react-redux";
import { Progress } from "reactstrap";

function PlayerProgress() {
    let currentValue: any = useSelector((state) => state);
    let currentPlayer = currentValue.currentQuestion;

    return (
        <Progress value={currentPlayer * 10} color="warning">
            {currentPlayer * 10}%
        </Progress>
    );
}

export default PlayerProgress;
