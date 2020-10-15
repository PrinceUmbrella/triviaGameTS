import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import InputHandler from './components/InputHandler';
 
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/home" component={() => <Game />} />
                    <Redirect to="/home" />
                </Switch>
                    <Game/>
            </div>
        </BrowserRouter>

  );
}

export default App;
