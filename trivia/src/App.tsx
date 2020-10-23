import React from "react";
import "./App.css";
import Game from "./components/Game";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import { playReducer } from "./redux/reducer";
import InputHandler from "./components/InputHandler";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose;
const store = createStore(playReducer, composeEnhancers);

function App() {
    return (
        <div className="container">
            <Provider store={store}>
                <HashRouter basename="/">
                    <Container style={{ marginTop: 100 }}>
                        <Switch>
                            <Route exact path="/" component={InputHandler} />
                            <Route path="/home" component={Game} />
                            <Redirect to="/" />
                        </Switch>
                    </Container>
                </HashRouter>
            </Provider>
        </div>
    );
}

export default App;
