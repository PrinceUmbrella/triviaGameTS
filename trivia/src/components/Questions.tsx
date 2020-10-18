import React from 'react';
import {Question} from '../interfaces/gameInterfaces';
import {
  Jumbotron,
  Button,
  Container
} from 'reactstrap';
// import {score} from '../redux/action';

interface questionsInput{
    onClick: () => void;
    question: Question;
}


function QuestionsDisplay(props?:any) {
    const question: Question = props.question; 
    let rSelected: any = null;

    const setRSelected = (answer:any) => {
        rSelected = answer;
    }
    let countt = 0;
    return (
        <div>
             <Jumbotron fluid>
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
            <Button color="primary" size="lg" onClick={() => {props.onClick(rSelected)}} block>Submit Answer</Button>
        </div>

            
    );
}

export default QuestionsDisplay;
