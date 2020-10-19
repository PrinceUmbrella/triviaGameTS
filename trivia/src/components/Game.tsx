import React, { useState } from 'react';
import '../App.css';
import Score from './Score';
import QuestionsDisplay from './Questions';
import questionList from '../data/questionsInput.json';
import {Question, Category, RootInput, Player} from '../interfaces/gameInterfaces';
import InputHandler from './InputHandler';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';
 
function Game() {
    const[currentAnswer, setCurrentAnswer] = useState<string>();
    const state: any = useSelector((state) => state);
    let currentQuestion = state.currentQuestion;

    const jsonFormat: RootInput = questionList;
    const allCategory:Category[] = jsonFormat.questionsList;
    let allQuestion:Question[] = [];
    allCategory.map((x: Category) => allQuestion = [...allQuestion,...x.questions]);

    return (
        <Container>
            <Score/>
            <br/>
            <QuestionsDisplay question={allQuestion[currentQuestion]} onClick={setCurrentAnswer}/>
            <p>Final Selected: {currentAnswer}</p>
        </Container>

  );
}


export default Game;
