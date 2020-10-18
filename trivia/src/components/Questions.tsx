import React, {useState, useEffect} from 'react';
import {Question} from '../interfaces/gameInterfaces';
import {
  Jumbotron,
  ButtonGroup,
  Button,
  Container
} from 'reactstrap';

interface questionsInput{
    onClick: () => void;
    question: Question;
}


function QuestionsDisplay(props?:any) {
    const question: Question = props.question; 
    const [rSelected, setRSelected] = useState(0);

    return (
        <div>
             <Jumbotron fluid>
                <Container fluid>
                    <p>{question.question}</p>
                </Container>

            </Jumbotron>
            <Button color="secondary" size="lg" onClick={() => setRSelected(0)} active={rSelected === 0} block>{question.options[0]}</Button>
            <Button color="secondary" size="lg" onClick={() => setRSelected(1)} active={rSelected === 2} block>{question.options[1]}</Button>
            <Button color="secondary" size="lg" onClick={() => setRSelected(2)} active={rSelected === 3} block>{question.options[2]}</Button>
            <Button color="secondary" size="lg" onClick={() => setRSelected(3)} active={rSelected === 4} block>{question.options[3]}</Button>
            <p>Selected: {rSelected}</p>
            <Button color="primary" size="lg" onClick={() => props.onClick(rSelected)} block>Submit Answer</Button>
        </div>

            
    );
}

export default QuestionsDisplay;
