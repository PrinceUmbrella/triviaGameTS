import React from 'react'; 
import { useSelector } from 'react-redux';
import { Table } from 'reactstrap';


function Final(){

    const state: any = useSelector((state) => state);

    const tableRow = (playerName:any, playerScore:any,position:any) => (
        <tr>
            <td>{position}</td>
            <td>{playerName}</td>
            <td>{playerScore}</td>
        </tr>
    ); 


    return (
        <div>
            <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRow(state.players[0].name, state.players[0].score, 1)}
                    {tableRow(state.players[1].name, state.players[1].score, 2)}
                </tbody>
            </Table>
        </div>
    )   
}

export default Final; 