import React from "react";
import { useSelector } from "react-redux";
import { Progress } from "reactstrap";

function PlayerProgress() {
    let currentValue: any = useSelector((state) => state);
    let currentPlayer = currentValue.currentQuestion;

    return (
        <Progress
            value={currentPlayer ? currentPlayer * 10 : 0}
            color="warning"
        >
            {currentPlayer ? currentPlayer * 10 : 0}%
        </Progress>
    );
}

export default PlayerProgress;
