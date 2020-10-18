import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
 
function App() {
    return (
        <div>
            <BrowserRouter>
                <Container style={{ marginTop:100 }}>
                    <Switch>
                        <Route path="/home" component={() => <Game />} />
                        <Redirect to="/home" />
                    </Switch>
                </Container> 
            </BrowserRouter>
        </div>


  );
}

export default App;
