import React, { useState } from 'react';
import {Question} from '../interfaces/gameInterfaces';
import {
  Jumbotron,
  Button,
  Container
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { moveToNextQuestion } from '../redux/action';

interface questionsInput{
    onClick: () => void;
    question: Question;
}

function QuestionsDisplay(props?:any) {
    const question: Question = props.question; 
    const[rSelected, setRSelected] = useState<string>();
    let dispatch = useDispatch();
    let countt = 0;
    const buttonClicked = () => {
        props.onClick(rSelected);
        dispatch(moveToNextQuestion());
    };

    return (
        <div>
             <Jumbotron fluid >
                <Container fluid>
                    <p>{question.question}</p>
                </Container>
            </Jumbotron>
            {
                question.options.map((option) => {
                    countt++;
                    return(
                        <Button color="secondary" size="lg" onClick={() => setRSelected(option)} active={rSelected === option} block>{option}</Button>
                    );
                })
            }
            <p>Selected: {rSelected}</p>
            <Button color="primary" size="lg" onClick={() => buttonClicked()} block>Submit Answer</Button>
        </div>

            
    );
}

export default QuestionsDisplay;
