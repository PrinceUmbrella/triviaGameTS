import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import {playerName } from '../redux/action';

function InputHandler() {
    const [playerOneInfo, setPlayerOneInfo] = useState<string>();
    const [playerTwoInfo, setPlayerTwoInfo] = useState<string>();
    let readyToStart = false;
    let dispatch = useDispatch();
    const buttonClicked = (index: any, name: string | undefined) => {
        dispatch(playerName(index, name));
    };

//   const routeChange = () =>{ 
//     readyToStart = true;
//     return {readyToStart? <Redirect to="/home"></Redirect>: undefined;});
//   };

	return (
		<div className="App">
		    <h1>Input</h1>
            <InputGroup>
                <Input type="text" placeholder={"Player 1's Name"} onChange={(event) => setPlayerOneInfo(event.target.value)}/>
                <Button onClick={() => buttonClicked(0,playerOneInfo)}>Submit Name</Button>
            </InputGroup>
            <br />
            <InputGroup>
                <Input type="text" placeholder={"Player 2's Name"} onChange={(event) => setPlayerTwoInfo(event.target.value)}/>
                <Button onClick={() => buttonClicked(1,playerTwoInfo)}>Submit Name</Button>
            </InputGroup>
            <br />
            <Link to="/home" className="btn btn-primary">Sign up</Link>
		</div>
  );
}

export default InputHandler;
