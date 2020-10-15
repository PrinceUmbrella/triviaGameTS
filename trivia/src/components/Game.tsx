import React, { useState } from 'react';
import '../App.css';
import Score from './Score';
import QuestionsDisplay from './Questions';
import questionList from '../data/questionsInput.json';
import {Question, Category, RootInput, Player} from '../interfaces/gameInterfaces';
import InputHandler from './InputHandler';
 
function Game() {
    const jsonFormat: RootInput = questionList;
    const allCategory:Category[] = jsonFormat.questionsList;
    let allQuestion:Question[] = [];
    allCategory.map((x: Category) => allQuestion = [...allQuestion,...x.questions]);

    console.log(allQuestion);
    return (
        <div className="App">
        <header className="App-header">
            <InputHandler/>
            <Score/>
            <QuestionsDisplay/>
        </header>
        </div>
  );
}

export default Game;
