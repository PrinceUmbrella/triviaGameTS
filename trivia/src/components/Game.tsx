import React from 'react';
import '../App.css';
import Score from './Score';
import QuestionsDisplay from './Questions';
import questionList from '../data/questionsInput.json';
import {Question, Category, RootInput, Player} from '../interfaces/gameInterfaces';
import InputHandler from './InputHandler';
import { Container } from 'reactstrap';
 
function Game() {
    // const [currentAnswer, setCurrentAnswer] = useState<string>();
    let currentAnswer = 0;

    const setCurrentAnswer = (answer: any) => {
        currentAnswer = answer;
    };
    const jsonFormat: RootInput = questionList;
    const allCategory:Category[] = jsonFormat.questionsList;
    let allQuestion:Question[] = [];
    let counter: number = 0;
    allCategory.map((x: Category) => allQuestion = [...allQuestion,...x.questions]);

    return (
        <Container>
            {/* <InputHandler/> */}
            <Score/>
            <QuestionsDisplay question={allQuestion[counter]} onClick={setCurrentAnswer}/>
            <p>Final Selected: {currentAnswer}</p>
        </Container>

  );
}


export default Game;
