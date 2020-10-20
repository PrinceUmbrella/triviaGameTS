import React from "react";
import Score from "./Score";
import QuestionsDisplay from "./Questions";
import questionList from "../data/questionsInput.json";
import { Question, Category, RootInput } from "../interfaces/gameInterfaces";
import { Container, Jumbotron } from "reactstrap";
import { useSelector } from "react-redux";
import CheckAnswer from "./CheckAnswer";
import Final from "./Final";

function Game() {
    const state: any = useSelector((state) => state);
    let currentQuestion = state.currentQuestion;

    const jsonFormat: RootInput = questionList;
    const allCategory: Category[] = jsonFormat.questionsList;
    let allQuestion: Question[] = [];
    allCategory.map(
        (x: Category) => (allQuestion = [...allQuestion, ...x.questions])
    );

    const levelOne: Question[] = shuffleArray(getLevelQuestion(allQuestion, 1));
    const levelTwo: Question[] = shuffleArray(getLevelQuestion(allQuestion, 2));
    const levelThree: Question[] = shuffleArray(
        getLevelQuestion(allQuestion, 3)
    );
    const levelFour: Question[] = shuffleArray(
        getLevelQuestion(allQuestion, 4)
    );
    const levelFive: Question[] = shuffleArray(
        getLevelQuestion(allQuestion, 5)
    );

    allQuestion = shuffleArray(allQuestion);
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
                    <Score />
                    <br />
                    {state.answer !== "" && state.currentAnswer !== "" ? (
                        <CheckAnswer />
                    ) : (
                        <div></div>
                    )}
                    <br />
                    <QuestionsDisplay question={allQuestion[currentQuestion]} />
                    <br />
                </div>
            )}
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

function shuffleArray(array: Question[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
export default Game;
