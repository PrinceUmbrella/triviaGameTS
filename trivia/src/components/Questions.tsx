import React, {useState, useEffect} from 'react';
import {Question} from '../interfaces/gameInterfaces';

interface questionsInput{
    onClick: () => void;
    question: Question;
}

function QuestionsDisplay(props?:any) {

    return (
        <div className="App">
            
        <h1>Questions</h1>
        </div>
    );
}

export default QuestionsDisplay;
