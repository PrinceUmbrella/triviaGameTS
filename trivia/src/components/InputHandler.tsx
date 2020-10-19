import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Input, InputGroup, Jumbotron } from "reactstrap";
import { playerName } from "../redux/action";

function InputHandler() {
    const [playerOneInfo, setPlayerOneInfo] = useState<string>();
    const [playerTwoInfo, setPlayerTwoInfo] = useState<string>();

    let dispatch = useDispatch();
    const buttonClicked = (
        nameOne: string | undefined,
        nameTwo: string | undefined
    ) => {
        dispatch(playerName(0, nameOne));
        dispatch(playerName(1, nameTwo));
    };

    return (
        <div className="App">
            <Jumbotron>
                <h1>Input</h1>
                <InputGroup>
                    <Input
                        type="text"
                        placeholder={"Player 1's Name"}
                        onChange={(event) =>
                            setPlayerOneInfo(event.target.value)
                        }
                    />
                </InputGroup>
                <br />
                <InputGroup>
                    <Input
                        type="text"
                        placeholder={"Player 2's Name"}
                        onChange={(event) =>
                            setPlayerTwoInfo(event.target.value)
                        }
                    />
                </InputGroup>
                <br />
                {playerTwoInfo && playerOneInfo ? (
                    <Link
                        to="/home"
                        onClick={() =>
                            buttonClicked(playerOneInfo, playerTwoInfo)
                        }
                        className="btn btn-primary"
                    >
                        Start the game
                    </Link>
                ) : (
                    <Button disabled>Start the game</Button>
                )}
            </Jumbotron>
        </div>
    );
}

export default InputHandler;
