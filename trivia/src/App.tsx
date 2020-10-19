import React from 'react';
import './App.css';
import Game from './components/Game';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import * as acc from './redux/action';
import { compose, createStore } from 'redux';
import { playReducer } from './redux/reducer';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;
const store = createStore(playReducer, composeEnhancers);

console.log(store.getState());
store.dispatch(acc.playerName(1,"leo"));

const App= () => {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Container style={{ marginTop:100 }}>
                        <Switch>
                            <Route path="/home" component={() => <Game />} />
                            <Redirect to="/home" />
                        </Switch>
                    </Container> 
                </BrowserRouter>
            </Provider>
        </div>


  );
}

export default App;
