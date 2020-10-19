import React, { useState } from "react";
import "../App.css";
import Score from "./Score";
import QuestionsDisplay from "./Questions";
import questionList from "../data/questionsInput.json";
import {
    Question,
    Category,
    RootInput,
    Player,
} from "../interfaces/gameInterfaces";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

function Game() {
    const [currentAnswer, setCurrentAnswer] = useState<string>();
    const state: any = useSelector((state) => state);
    let currentQuestion = state.currentQuestion;

    const jsonFormat: RootInput = questionList;
    const allCategory: Category[] = jsonFormat.questionsList;
    let allQuestion: Question[] = [];
    allCategory.map(
        (x: Category) => (allQuestion = [...allQuestion, ...x.questions])
    );

    const levelOne: Question[] = getLevelQuestion(allQuestion, 1);
    const levelTwo: Question[] = getLevelQuestion(allQuestion, 2);
    const levelThree: Question[] = getLevelQuestion(allQuestion, 3);
    const levelFour: Question[] = getLevelQuestion(allQuestion, 4);
    const levelFive: Question[] = getLevelQuestion(allQuestion, 5);

    // console.log(levelOne);
    // console.log(levelTwo);
    // console.log(levelThree);
    // console.log(levelFour);
    // console.log(levelFive);

    return (
        <Container>
            <Score />
            <br />
            <QuestionsDisplay
                question={allQuestion[currentQuestion]}
                onClick={setCurrentAnswer}
            />
            <p>Final Selected: {currentAnswer}</p>
        </Container>
    );
}

function getLevelQuestion(questionList: Question[], level: number): Question[] {
    let levelList: Question[] = [];
    questionList.map((x: Question) => {
        if (x.worth === level) {
            levelList = [...levelList, x];
        }
    });

    return levelList;
}

export default Game;
